<div class="max-w-6xl mx-auto p-4 flex flex-col gap-4" id="app">

    
  
    <div class="h- h-9"/>
  
    <div class="w-full slideIn" id="slide">
      <div class="">
        <h1 class="text-5xl font-medium">
          Dooro Cashar
        </h1>
      </div>
    
      <div class="h- h-9"/>
      <div class="flex flex-wrap gap-4">
        {#each lessons as lesson}
          <div class="min-w-[300px] p-4 border rounded-md hover:scale-105 duration-75">
            <a href="{'/?view='+lesson.id}" class=" flex flex-col gap-4">
              <div class="flex flex-wrap w-full justify-between items-center">
                <h1 class="text-lg">{lesson['lesson-name']}</h1>
                <h1 class="text-lg p-3 bg-gray-100 rounded-md">{lesson['name-translation']}</h1>
                
              </div>
              <p class="text-sm text-gray-600">
                {lesson['description']}
              </p>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <script>
    import { collection, getDocs } from "firebase/firestore";
    import { db } from "../firebase/firebase_init";
    import { onMount } from "svelte";
    import { loading } from "../store";
    import { slideIn } from "../utils/animations";

    //Get lessons from firebase
    $:lessons = [];

    let collectionRef = collection(db, "lessons");
    getDocs(collectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        lessons.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      lessons = lessons // to trigger the reactivity..fix this for better performance
      loading.set(false);
      slideIn();
    });
      
    onMount(() => {
        
    
    });
  </script>