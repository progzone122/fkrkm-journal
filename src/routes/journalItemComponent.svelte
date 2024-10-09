<script lang="ts">
// @ts-nocheck

    import "../app.css";
    import { timeSlots, urls, go_meet, go_moodle } from "../data/index.ts";

    export let day, lessons, dayIndex;

    let isHovered = Array(lessons.length).fill(false);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full h-full bg-primary-600 flex font-bold rounded-lg">
    <div class="w-auto h-full bg-primary-800 flex items-center py-4">
        <p class="w-[3em] writing-mode-vertical text-lg text-center flex items-center">{day}</p>
    </div>
    <div class="w-full h-full">
            {#each Object.entries(lessons) as [index, lesson]}
                <div class={`w-full flex transition duration-300 ${isHovered[index] ? 'bg-primary-700' : 'bg-transparent'}`}
                on:mouseenter={() => isHovered[index] = true}
                on:mouseleave={() => isHovered[index] = false}
                on:touchstart={() => isHovered[index] = !isHovered[index]}>
                    <div class="w-[78%] p-4">
                        {lesson ? lesson : ""}
                    </div>
                    {#if isHovered[index] && lesson !== null}
                        <div class="w-full flex flex-col items-end p-4">
                            <!-- svelte-ignore missing-declaration -->
                            <button class="mt-2 bg-white text-primary-600 rounded px-4 py-2"
                            on:click={() => go_meet(urls[lesson].meet, dayIndex)}>
                                <img class="w-5" src="/fkrkm-journal/meet.png" alt="Посилання на конференцію">
                            </button>
                            <button class="mt-2 bg-white text-primary-600 rounded px-4 py-2"
                            on:click={() => go_moodle(urls[lesson].moodle)}>
                                <img class="w-5" src="/fkrkm-journal/moodle.png" alt="Посилання на відвідування">
                            </button>
                        </div>
                    {:else}
                        <div class="w-[22%] flex flex-col items-end p-4">
                            <p class="text-time-start-500">{timeSlots[index][0]}</p>
                            <p class="text-time-end-500">{timeSlots[index][1]}</p>
                        </div>
                    {/if}
                </div>
            {/each}
    </div>
</div>
