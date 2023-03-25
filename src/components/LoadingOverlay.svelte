{#if $loading}
    <div class="fixed top-0 left-0 w-screen h-screen bg-white pointer-events-none transition-opacity duration-300 z-50">
        <div class="flex items-center justify-center h-full">
            <div class="flex gap-4 items-center">
                <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                <span class="text-gray-600 text-xl">Sug...</span>
            </div>
        </div>
    </div>
{/if}

<script>
    import { onMount } from "svelte";


    import {loading} from "../store"

    let element;

    onMount(()=>{
    
        if($loading){
            console.log("loading");
        }if(!$loading){
            console.log("not loading");
        }
    })
</script>