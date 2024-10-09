<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    
    export let showModal: Boolean = false;
    export let closeModal;
    export let urls: String[] = [];
</script>

{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" 
        on:click={closeModal}
        transition:fade>
        <div 
            class="bg-white dark:bg-bg-dark-800 rounded-lg shadow-lg w-[90%] lg:w-[60%] p-6"
            on:click|stopPropagation
            transition:fly={{ y: 20, duration: 300 }}>
            <h2 class="text-lg font-bold">Викладач використовує кілька посилань на конференцію</h2>
            <p class="mt-2">{urls}</p>
            <button on:click={closeModal} class="mt-4 bg-primary-600 text-white py-2 px-4 rounded">
                Закрыть
            </button>
        </div>
    </div>
{/if}
