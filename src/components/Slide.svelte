{#if showSuccess}
  <svelte:component this={SuccessSlide} slide={currentSlide} lesson={lesson} on:lessonEnd={lessonEnded} />
{/if}
<div class="w-full slideIn" id="slide">
    <div class="">
      {#if currentSlide}
        <h1 class="text-5xl font-medium">
          Sidee Loo Dhahaa <span class="p-2 rounded-3xl bg-gray-100">'{currentSlide.translation}'</span>
        </h1>
      {/if}
    </div>
  
    <div class="h- h-9"/>
  
    <div class="w-full flex flex-wrap gap-4 justify-center md:justify-start">
      {#if currentSlide}
        <Options slide={currentSlide} lesson={lesson} on:success={success}/>
      {/if}
    </div>
</div>

<script>
    import { collection, doc, getDocs, query } from "firebase/firestore";
    import Options from "../components/Options.svelte";
    import { db } from "../firebase/firebase_init";
    import { loading } from "../store";
    import _ from "lodash";
    import {slideIn} from "../utils/animations"
    import { onMount } from "svelte";
    import SuccessSlide from "./success-slide.svelte";
    import LessonEnd from "./LessonEnd.svelte";

    export let lesson // lesson id from url's view param
    let slides = []
    
    let currentSlide
    let showSuccess = false

    const parsedUrl = new URL(window.location.href);
    console.log(parsedUrl.searchParams.get("slide")); 


    let docRef = doc(db, "lessons", lesson);

    let slidesRef = collection(docRef, "slides");


    //console.log(slidesRef);
    getDocs(slidesRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        slides.push({
            id: doc.id,
            ...doc.data()
        });
      });
    })
    .then(() => {
      //console.log(slides);
      //Check if slide is set in url
      if(!parsedUrl.searchParams.get("slide") || parsedUrl.searchParams.get("slide") == null){
        
        currentSlide = _.find(slides, {first: true})
        //console.log(currentSlide);
      }
      else{
        //Check if slide exists
        let slide = _.find(slides, {id: parsedUrl.searchParams.get("slide")})

        if(slide){
          currentSlide = slide
        }
        else{
          currentSlide = _.find(slides, {first: true})
        }
        
      }
      console.log("currentSlide",currentSlide);
      loading.set(false)
      slideIn()
      
    })

    function success(){
      showSuccess = true
    }

    function lessonEnded(){
      new LessonEnd({
        target: document.body,
        props: {
          lesson: lesson
        }
      })
    }
    

    onMount(()=>{
      
        
    })

</script>