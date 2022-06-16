// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Should be saved in a .env file
const firebaseConfig = {
  apiKey: "AIzaSyAuhkrBDlNHoZNmTlWWe8Hc-Uaxb7enXSI",
  authDomain: "emilan-c989a.firebaseapp.com",
  projectId: "emilan-c989a",
  storageBucket: "emilan-c989a.appspot.com",
  messagingSenderId: "1075036927742",
  appId: "1:1075036927742:web:51b69268591e91f58957af"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)