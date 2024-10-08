<script lang="ts">
    import "../app.css";
    import { timeSlots, urls, go_meet, go_moodle } from "../data/index.ts";

    export let day, lessons, dayIndex;

    // Track hover state for desktop and click state for mobile
    let isHovered = Array(lessons.length).fill(false);
    let isClicked = Array(lessons.length).fill(false);

    // Initialize mobile state
    let isMobile = false;

    // Function to check if the device is mobile
    const checkIfMobile = () => {
        if (typeof window !== "undefined") {
            isMobile = window.innerWidth <= 768;
        }
    };

    // Call the function on component mount
    checkIfMobile();

    // Update mobile check on window resize
    const handleResize = () => {
        if (typeof window !== "undefined") {
            isMobile = window.innerWidth <= 768;
        }
    };

    // Add event listener to detect window resize
    if (typeof window !== "undefined") {
        window.addEventListener('resize', handleResize);
    }
</script>

<div class="w-full h-full bg-primary-600 text-white flex font-bold rounded-lg">
    <div class="w-auto h-full bg-primary-800 flex items-center py-4">
        <p class="w-[3em] writing-mode-vertical text-lg text-center flex items-center">{day}</p>
    </div>
    <div class="w-full h-full">
        {#each Object.entries(lessons) as [index, lesson]}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
                class={`w-full flex transition duration-300 ${isMobile ? (isClicked[index] ? 'bg-primary-700' : 'bg-transparent') : (isHovered[index] ? 'bg-primary-700' : 'bg-transparent')}`}
                on:mouseenter={() => !isMobile && (isHovered[index] = true)}
                on:mouseleave={() => !isMobile && (isHovered[index] = false)}
                on:click={() => isMobile && (isClicked[index] = !isClicked[index])}>
                
                <div class="w-[78%] p-4">
                    {lesson ? lesson : ""}
                </div>

                {#if (isMobile && isClicked[index]) || (!isMobile && isHovered[index])}
                    <div class="w-full flex flex-col items-end p-4">
                        <button class="mt-2 bg-white text-primary-600 rounded px-4 py-2"
                        on:click={() => go_meet(urls[lesson].meet, dayIndex)}>
                            <img class="w-5" src="/fkrkm-journal/meet.png" alt="Meeting link">
                        </button>
                        <button class="mt-2 bg-white text-primary-600 rounded px-4 py-2"
                        on:click={() => go_moodle(urls[lesson].moodle)}>
                            <img class="w-5" src="/fkrkm-journal/moodle.png" alt="Moodle link">
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