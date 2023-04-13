// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqcqep7pneOX3IkvP8jTHLfOOjO5Ud3k4",
  authDomain: "diploma-a8bbe.firebaseapp.com",
  projectId: "diploma-a8bbe",
  storageBucket: "diploma-a8bbe.appspot.com",
  messagingSenderId: "536257524888",
  appId: "1:536257524888:web:ab70fe6a1ea5aa2e2ecced",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
