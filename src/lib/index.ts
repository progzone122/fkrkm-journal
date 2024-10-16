import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { timeSlots, journal } from "../data/index.js";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isBetween);

class Dtw {
    index: number;
    name: string;

    constructor(index: number, name: string) {
        this.index = index;
        this.name = name;
    }
}

// Функция для получения текущего дня недели на украинском
const get_dtw_now = (): Dtw => {
    const daysOfWeekUkr = [
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "П’ятниця",
        "Субота",
        "Неділя"
    ];

    const dayIndex = dayjs().day();
    const ukrDayIndex = (dayIndex + 5) % 7;
    console.log(ukrDayIndex);
    return new Dtw(ukrDayIndex + 1, daysOfWeekUkr[ukrDayIndex]);
}

// Функция для получения активного урока на основе текущего времени
const get_active_lesson = (): string | null => {
    const timezone = "Europe/Kiev";
    const date_now: dayjs.Dayjs = dayjs().tz(timezone); ; // Используем Day.js

    // Проходим по всем временным слотам уроков
    for (let i = 0; i < timeSlots.length; i++) {
        let [startTimeStr, endTimeStr]: [string, string] = timeSlots[i];

        const startTime = dayjs(`${dayjs().format('YYYY-MM-DD')} ${startTimeStr}`, 'YYYY-MM-DD HH:mm').tz('Europe/Kiev');
        const endTime = dayjs(`${dayjs().format('YYYY-MM-DD')} ${endTimeStr}`, 'YYYY-MM-DD HH:mm').tz('Europe/Kiev');
        
        console.log(startTime, endTime);

        // Проверяем, находится ли текущее время между временем начала и конца урока
        if (date_now.isBetween(startTime, endTime, null, '[]')) {
            const dtw: string = get_dtw_now().name;

            if (dtw !== "Субота" && dtw !== "Неділя") {
                let lesson: string = journal[dtw][i];
                
                if (lesson !== null) {
                    return lesson;
                }
            }
        }
    }

    return null;
}

export {
    get_active_lesson,
    get_dtw_now
}