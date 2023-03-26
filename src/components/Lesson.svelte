<div class="max-w-6xl mx-auto p-4 flex flex-col gap-4" id="app">

    <div class="flex justify-between w-full">
        <div class="flex gap-3">
          <span class="p-2 font-medium rounded-full bg-gray-100 text-gray-600 text-sm">{lessonNameTrans}</span> <div class="w-1 bg-gray-100"></div> <span class="p-2 font-medium rounded-full bg-gray-100 text-gray-600 text-sm">{lessonName}</span>
        </div>
      <div/>
    </div>
  
    <div class="h- h-9"/>
    <Slide lesson ={dbLesson}/>
  </div>
  
  <script>
      import { onMount, setContext } from "svelte";
      import Slide from "./Slide.svelte";
      import _ from "lodash";
      import { doc, getDoc } from "firebase/firestore";
      import { db } from "../firebase/firebase_init";


      export let dbLesson

      let lessonName = ""
      let lessonNameTrans = ""

      let docRef = doc(db, "lessons", dbLesson);

      setContext("lesson", 
      getDoc(docRef)
      .then(doc =>{
        if(doc.exists()){
          console.log(doc.data());
          let data = doc.data()
          lessonName = data['lesson-name']
          lessonNameTrans = data['name-translation']
          return data
        }else{
          window.location.href = "/"
        }
      })
      );

      
        
      
  
      onMount(() => {
        

        
        
      })

  </script>