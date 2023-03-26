
<div bind:this={optionElement} on:click={clickHandler} on:keydown={clickHandler} class="bg-gray-100 min-w-[200px] min-h-[200px] flex justify-center items-center rounded-md font-medium text-lg text-gray-700 hover:text-white hover:bg-purple-500 hover:scale-105 duration-75">
    {option.word}
</div>

<script>
   import { onMount } from 'svelte'
   export let option

   import {createEventDispatcher} from 'svelte'

   const dispatch = createEventDispatcher()

   function success(option) {
       dispatch('success',{
           option:option,
       })
   }

   

   let optionElement

   function clickHandler() {
       ///console.log(option);
       if(option.correct){
           optionElement.classList.add('bg-green-500','text-white', 'hover:bg-green-500')
           optionElement.classList.remove('scale-110')
           success(option)

           //console.log(option);

           setTimeout(() => {
           optionElement.classList.remove('bg-green-500')
           optionElement.classList.remove('text-white')
           optionElement.classList.remove('scale-110')
           optionElement.classList.remove('hover:bg-green-500')
           }, 1000)

           return
       }  

   

       optionElement.classList.add('bg-red-500', "hover:bg-red-500")
       optionElement.classList.add('text-white')
       optionElement.classList.add('scale-105')
       setTimeout(() => {
           optionElement.classList.remove('bg-red-500')
           optionElement.classList.remove('text-white')
           optionElement.classList.remove('scale-105')
           optionElement.classList.remove('hover:bg-red-500')
       }, 1000)
   }

   onMount(() => {
   
   })
</script>
