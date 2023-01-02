// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcj204VjvJSZlrc131wwBbWImAUGTLf0w",
  authDomain: "tourism-auth-project.firebaseapp.com",
  projectId: "tourism-auth-project",
  storageBucket: "tourism-auth-project.appspot.com",
  messagingSenderId: "642509145915",
  appId: "1:642509145915:web:1b0edf8e54329a9eda191e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;