// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-71e7c.firebaseapp.com",
  projectId: "mern-auth-71e7c",
  storageBucket: "mern-auth-71e7c.appspot.com",
  messagingSenderId: "1040090022845",
  appId: "1:1040090022845:web:42bb147bbf8b42560cc8d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);