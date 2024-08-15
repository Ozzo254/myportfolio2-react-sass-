// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAO4WLcYIfORBMWpmai0T41i88YamyN70",
  authDomain: "agunda-portfolio-react.firebaseapp.com",
  projectId: "agunda-portfolio-react",
  storageBucket: "agunda-portfolio-react.appspot.com",
  messagingSenderId: "523681193007",
  appId: "1:523681193007:web:79667ff37e4c5a731d3ada",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
