<div class="max-w-6xl mx-auto p-4 flex flex-col gap-4" id="app">

    
  
    <div class="h- h-9"/>
  
    <div class="w-full" id="slide">
      <div class="">
        <h1 class="text-5xl font-medium">
          Dooro Cashar
        </h1>
      </div>
    
      <div class="h- h-9"/>
    
      
    </div>
  </div>
  
  <script>
      import { onMount } from "svelte";
    import { loading } from "../store";
      
      onMount(() => {
         
        loading.set(false);
      });
  </script>