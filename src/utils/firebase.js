// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOkTq2JWgHPjL18VntY9_1q-xSZ2W9iW8",
  authDomain: "by-aryan.firebaseapp.com",
  projectId: "youtube-by-aryan",
  storageBucket: "youtube-by-aryan.appspot.com",
  messagingSenderId: "333424619033",
  appId: "1:333424619033:web:4dfe2d0394bd873f27c488",
  measurementId: "G-M7G2F5YEBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();