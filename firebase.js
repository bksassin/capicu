// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIBow9LqC4CKdFbiGLGWEoKbuzDBCuOAA",
  authDomain: "capicufoodtruck.firebaseapp.com",
  projectId: "capicufoodtruck",
  storageBucket: "capicufoodtruck.appspot.com",
  messagingSenderId: "377540715127",
  appId: "1:377540715127:web:95d68b58d17edad3c09c72",
  measurementId: "G-Q8JB4PDMD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
