// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5S-FLBXTXJHKVbxv6OYpS5n2EwzXY-tI",
  authDomain: "somali-project-32042.firebaseapp.com",
  projectId: "somali-project-32042",
  storageBucket: "somali-project-32042.appspot.com",
  messagingSenderId: "1068962935898",
  appId: "1:1068962935898:web:0e04da3f7c8cf69e98d463",
  measurementId: "G-97Z6N0L6GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);