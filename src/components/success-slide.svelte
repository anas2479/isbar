<div bind:this={container} class="w-full h-screen absolute top-0 left-0 bg-green-500 z-10 successContainer overflow-hidden">

    <div class="w-full h-full flex flex-wrap " bind:this={successSection}>
        <div class="flex-1 flex justify-center items-center bg-green-600">
            <div class="w-full">
                {@html images[Math.floor(Math.random()*images.length)]}
            </div>
        </div>
        <div class="flex-1 flex justify-center items-center" >
            <h1 class="text-3xl md:text-7xl font-medium text-white -rotate-3 -skew-y-3">
                {@html prompts[Math.floor(Math.random()*prompts.length)]}
            </h1>
        </div>
    </div>


    <div class="w-full h-full flex justify-center items-center" bind:this={sentenceSection}>
        <div class="flex flex-col gap-4">
            <h1 class="text-5xl font-medium text-slate-100 p-2 rounded-2xl bg-green-600">{sentence.sentence}</h1>
            <h1 class="text-2xl font-medium text-slate-100 p-2 rounded-2xl bg-green-600">{sentence.translations[Math.floor(Math.random()*sentence.translations.length)]}</h1>

            <div class="mt-4">
                <button bind:this={button} class="p-4 bg-white font-medium rounded-full hover:scale-95 active:scale-90 duration-75 opacity-0" on:click={resume}>Horay Usoco</button>
            </div>
        </div>
    </div>


</div>

<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { CustomEase } from "gsap/CustomEase";
    import { prompts, images } from "../data/success-slides";
    import { collection, doc, getDocs } from "firebase/firestore";
    import { db } from "../firebase/firebase_init";
    import {createEventDispatcher} from 'svelte';
   

    export let slide; // current slide object
    export let lesson; // lesson id from url's view param


    //console.log(slide);
    let container;

    let successSection;
    let sentenceSection;
    let button;


    let docRef = doc(db, `lessons/${lesson}/slides/${slide.id}`)
    let sentenceRef = collection(docRef, `sentences`)
    //console.log(sentenceRef);

    let sentence = {
        sentence: "Loading...",
        translations: ["Loading..."]
    }
    let sentences = []


   async function loadSentence(){
       await getDocs(sentenceRef)
        .then((querySnapshot) => {
            if(querySnapshot.empty){
                sentence = {
                    sentence: "Click to continue",
                    translations: ["Kudhufo Horay Usoco"]
                }
            } else {
                querySnapshot.forEach((doc) => {
                    sentences.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
            }
        })
        .then(() => {
            //console.log(sentences);
            sentence = sentences[Math.floor(Math.random()*sentences.length)]
            //return sentence
        })
        return sentence
    }

    loadSentence().then((sentence) => {
    })

    let dispatch = createEventDispatcher();

    function lessonEnd (){
        dispatch('lessonEnd', {
            lesson: lesson
        })
        //console.log("Lesson End");
    }

    function nextSlide(){
        const parsedUrl = new URL(window.location.href);
        if(slide.next.length > 0){
            window.location.search = `?view=${lesson}&slide=${slide.next}`
        } else {
            lessonEnd();
        }
    }

    let tl = gsap.timeline({
        onComplete: () => {
            nextSlide();
            container.remove();
            
        }
    })

    function resume() {
        if(slide.next === ""){
            lessonEnd();
            return;
        }
        //console.log(slide);
        tl.resume();
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

        if(sentenceSection){
            tl.to(sentenceSection, {
                y: -window.outerHeight, 
                opacity:1, 
                duration: 1,
                ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.026,0.768 0.184,0.916 0.376,1.096 0.818,1.001 1,1 "),

            });
            tl.to(button, {
                opacity: 1,
                duration: .2,
                delay: 1
            })
            tl.addPause()
        }
        
        tl.to(container,{ 
            y: -window.outerHeight,
            opacity: 0,
            duration: .2,
        })
    });

    
   
    

    
</script>