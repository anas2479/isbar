import './app.css'
import App from './App.svelte'
import HomeScreen from './components/HomeScreen.svelte'
import LoadingOverlay from './components/LoadingOverlay.svelte'

new LoadingOverlay({
  target: document.getElementById('app'),
})



const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("view")); 
 

//export default app
