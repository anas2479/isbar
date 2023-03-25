import './app.css'
import App from './App.svelte'
import HomeScreen from './components/HomeScreen.svelte'
import LoadingOverlay from './components/LoadingOverlay.svelte'

new LoadingOverlay({
  target: document.getElementById('app'),
})



const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("view")); 

if(parsedUrl.searchParams.get("view")) {
  let view = parsedUrl.searchParams.get("view");

   if(view =="home"){
     let homeScreen = new HomeScreen({
        target: document.getElementById('app'),
      })
    }else{
      let app = new App({
        target: document.getElementById('app'),
        props: {
          lesson: view,
        }
      })
    }
  
}
if(!parsedUrl.searchParams.get("view") || parsedUrl.searchParams.get("view") == null){
  let homeScreen = new HomeScreen({
    target: document.getElementById('app'),
  })
}
 

//export default app
