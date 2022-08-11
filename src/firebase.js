// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjJcFnyoAXKXJZNal-Kj2IZqiJvcctMdM",
  authDomain: "chat-nub.firebaseapp.com",
  projectId: "chat-nub",
  storageBucket: "chat-nub.appspot.com",
  messagingSenderId: "884943202911",
  appId: "1:884943202911:web:adc54a35157768920049ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);