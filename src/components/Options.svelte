<div class="w-full flex gap-4 md:justify-start justify-center slideIn">
    {#each options as option}
        <OptionCard option={option} on:success={success}/>
    {/each}

</div>
<script>
import { collection, doc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase_init";
import OptionCard from "./OptionCard.svelte";
import _ from "lodash";

export let slide // current slide object
export let lesson // lesson id from url's view param

import {createEventDispatcher} from 'svelte'

const dispatch = createEventDispatcher()

function success(option) {
    dispatch('success',{
        option:option,
    })
}


let docRef = doc(db, `lessons/${lesson}/slides/${slide.id}`);

let optionsRef = collection(docRef, "options");

let options = []

getDocs(optionsRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    options.push({
        id: doc.id,
        ...doc.data()
    });
  });
})
.then(() => {
  options = _.shuffle(options)
})
</script>