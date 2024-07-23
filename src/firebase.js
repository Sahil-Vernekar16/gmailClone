// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKG8wYR6dKZnnITdfgtu-KYPnDmvbqowQ",
  authDomain: "clone-2c32a.firebaseapp.com",
  projectId: "clone-2c32a",
  storageBucket: "clone-2c32a.appspot.com",
  messagingSenderId: "674640901539",
  appId: "1:674640901539:web:4f1f0eb926e4e37f735616",
  measurementId: "G-K856CY5G2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()