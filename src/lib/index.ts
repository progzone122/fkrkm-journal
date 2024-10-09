import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { timeSlots, journal } from "../data/index.js";

dayjs.extend(utc);
dayjs.extend(timezone);

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
    const ukrDayIndex = (dayIndex + 6) % 7;

    return new Dtw(ukrDayIndex, daysOfWeekUkr[ukrDayIndex]);
}

// Функция для получения активного урока на основе текущего времени
const get_active_lesson = (): string | null => {
    const date_now: dayjs.Dayjs = dayjs(); // Используем Day.js
    const current_time = date_now.format('HH:mm'); // Получаем текущее время в формате "HH:mm"

    // Проходим по всем временным слотам уроков
    for (let i = 0; i < timeSlots.length; i++) {
        const [startTime, endTime]: [string, string] = timeSlots[i];

        // Проверяем, находится ли текущее время между временем начала и конца урока
        if (current_time >= startTime && current_time <= endTime) {
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