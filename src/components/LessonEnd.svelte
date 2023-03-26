<div bind:this={container} class="w-full h-screen absolute top-0 left-0 bg-green-500 z-10 successContainer overflow-hidden">

    <div class="w-full h-full flex flex-wrap " bind:this={successSection}>
        <div class="flex-1 flex justify-center items-center bg-green-600">
            <div class="w-full">
                <div style="width:100%;height:0;padding-bottom:73%;position:relative;"><iframe src="https://giphy.com/embed/lD76yTC5zxZPG" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/the-end-thats-all-folks-lD76yTC5zxZPG">via GIPHY</a></p>
            </div>
        </div>
        <div class="flex-1 flex justify-center items-center" >
            <h1 class="text-3xl md:text-7xl font-medium text-white -rotate-3 -skew-y-3">
                Xaafid ayaad tahay!
            </h1>
        </div>
    </div>

    <div class="w-full h-full flex justify-center items-center" bind:this={sentenceSection}>
        <div class="flex flex-col gap-4">
            <h1 class="text-5xl font-medium text-slate-100 p-2 rounded-2xl bg-green-600">Aqoon La'aan Waa Iftiin La'aan!</h1>
           
            <div class="mt-4">
                <a href="{'/?view='+lesson}" class="p-4 bg-white font-medium rounded-full hover:scale-95 active:scale-90 duration-75 ">Soo Bilow</a>

                <button bind:this={button} class="p-4 bg-white font-medium rounded-full hover:scale-95 active:scale-90 duration-75 opacity-0" on:click={resume}>CasharoKale Kawardoon</button>
            </div>
        </div>
    </div>

</div>

<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { CustomEase } from "gsap/CustomEase";
    

    export let lesson;

    let container;

    let successSection;
    let sentenceSection;
    let button;

    let tl = gsap.timeline({
        onComplete: () => {
            
        }
    })

    function resume() {
        window.location.href = "/"

        //tl.resume();
    }

    onMount(() => {

        gsap.registerPlugin(CustomEase);

        

        gsap.from(container, {
            opacity: 0, 
            scale: 0.5,
            duration: .2
        });

        tl.to(successSection, {
            y: -window.outerHeight,
            duration: .2,
            delay: 3
        });

        tl.to(sentenceSection, {
            y: -window.outerHeight, 
            opacity:1, 
            duration: 1,
            ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.026,0.768 0.184,0.916 0.376,1.096 0.818,1.001 1,1 "),

        });
        tl.to(button, {
            opacity: 1,
            duration: .2,
            delay: .3
        })
       tl.addPause()
        
        tl.to(container,{
            y: -window.outerHeight,
            opacity: 0,
            duration: .2,
        })
    });

    
    
    

    
</script>