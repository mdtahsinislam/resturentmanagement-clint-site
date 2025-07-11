// Import the functions you need from the SDKs you need
//firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTEZ8h9A16e7quJwxfwYezWFihs-1Ick",
  authDomain: "resturentmanagement-website.firebaseapp.com",
  projectId: "resturentmanagement-website",
  storageBucket: "resturentmanagement-website.firebasestorage.app",
  messagingSenderId: "447925242651",
  appId: "1:447925242651:web:feab96a37657520c4f61be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);