// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3vMsm1MR3iD1Dm6Z0sjVKEWrrhF6OqkE",
  authDomain: "red-blood-36a51.firebaseapp.com",
  projectId: "red-blood-36a51",
  storageBucket: "red-blood-36a51.firebasestorage.app",
  messagingSenderId: "624091088635",
  appId: "1:624091088635:web:894b061c18a0bfaa4a925e",
  measurementId: "G-2JXW8550FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);