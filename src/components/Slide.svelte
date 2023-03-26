<div class="w-full slideIn" id="slide">
    <div class="">
      {#if currentSlide}
        <h1 class="text-5xl font-medium">
          Sidee Loo Dhahaa <span class="p-2 rounded-3xl bg-gray-100">'{currentSlide.translation}'</span>
        </h1>
      {/if}
    </div>
  
</div>
<script>
    import { collection, doc, getDocs, query } from "firebase/firestore";
    import { db } from "../firebase/firebase_init";
    import { loading } from "../store";
    import _ from "lodash";
    import { onMount } from "svelte";

    export let lesson // lesson id from url's view param
    let slides = []
    
    let currentSlide

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
      
    })

    

    onMount(()=>{
      
        
    })

</script>