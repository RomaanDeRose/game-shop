// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3S6MXUuLUD4K8g3zqOFPFMWyaDz-F8Nk",
  authDomain: "game-shop-918b9.firebaseapp.com",
  projectId: "game-shop-918b9",
  storageBucket: "game-shop-918b9.appspot.com",
  messagingSenderId: "352776666595",
  appId: "1:352776666595:web:ca8bb8f5fdf4d8648a74d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);
