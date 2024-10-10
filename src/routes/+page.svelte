<script lang="ts">
    // // components
	import JournalItemComponent from "./journalItemComponent.svelte";
    import AlertComponent from "./alertComponent.svelte";

    // // load data from json
    import { go_meet, journal, urls } from "../data/index.ts";
    import { get_active_lesson, get_dtw_now } from "../lib/index.ts";

    let activeLesson: string | null = null;
    let activeLesson_message: string = "";

    const updateActiveLesson = () => {
        const lesson = get_active_lesson();
        if (lesson) {
            activeLesson_message = `Згідно за розкладом, зараз триває пара "${lesson}"`;
            activeLesson = lesson;
            console.log(urls[activeLesson])
        } else {
            activeLesson_message = "";
            console.log("Активный урок не найден");
        }
    };

    updateActiveLesson();
    setInterval(updateActiveLesson, 1 * 60 * 1000);
</script>
<div class="w-full p-5">
    {#if activeLesson }
            <AlertComponent
            type="warning"
            message={activeLesson_message ? activeLesson_message : ""}
            url={activeLesson ? urls[activeLesson].meet : ""} />
    {/if}
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xlp:grid-cols-6 gap-4 p-5">
    {#each Object.entries(journal) as [day, lessons], index}
        <JournalItemComponent
        day={day}
        dayIndex={index}
        lessons={lessons} />
    {/each}
</div>