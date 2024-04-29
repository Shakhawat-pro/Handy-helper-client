// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfJGkDLhp9t2DEb8o--jpt__WabD4_uAA",
  authDomain: "exploreasia-48971.firebaseapp.com",
  projectId: "exploreasia-48971",
  storageBucket: "exploreasia-48971.appspot.com",
  messagingSenderId: "776312357469",
  appId: "1:776312357469:web:1339b0af4f13d6f3cdc3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth