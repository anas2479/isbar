import { writable } from 'svelte/store';

export let currentLesson = writable(null);
export let currentSlide = writable(null);

export let screen = writable('home');

export let loading = writable(true);