<script lang="ts">
    import { go_meet } from "../data/index.ts"

	export let type: String;
	export let message: String = "";
	export let url: string | null = "";
</script>

{#if type == 'warning'}
	<div class="w-full bg-warning flex items-center gap-4 p-5 rounded-lg font-bold">
		<img class="w-14 h-14" src="/warning-white.png" alt="" />
        <div>
            <h3>{message}</h3>
            {#if url}
                <button class="mt-2 bg-white hover:bg-primary-700 hover:text-white text-primary-600 rounded px-4 py-2 flex items-center gap-2
                transition duration-300"
                on:click={() => go_meet(url, "1")}>
                    <img class="w-5 h-4" src="/meet.png" alt="Швидке підключення">
                    <p class="text-[0.8em]">Швидке підключення</p>
                </button>
            {/if}
        </div>
	</div>
{/if}
