// lesson schedule
/*
    <day of the week> [
        <lesson name>,
        ...
    ]
*/
import journal from "./lessons.json";

// start and end times of leasson
// [start time, end time] 
import timeSlots from "./timeSlots.json"; 

// google meet conferences and moodle visiting urls
/* 
    <lesson name> {
        "meet": "google meet url"
        "moodle": "moodle url"
    }
*/
// or (if there are several links to pairs on different days)
/* 
    <lesson name> {
        "meet": {
            <day of the week id>: "google meet url",
            ...
        }
        "moodle": "moodle url"
    }
*/
import urls from "./urls.json"

const go_meet = (url: string | Record<string, string>, day_index: string) => {
    if (url == null) {
        console.error("invalid google meet url");
        return -1;
    }
    if (typeof url === "string") {
        window.open(url, '_blank');
    } else {
        window.open(url[day_index], '_blank');
    }
}
const go_moodle = (url: string) => {
    window.open(url, '_blank');
}

export {
    journal,
    timeSlots,
    urls,
    //
    go_meet,
    go_moodle
}