// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD_XHRd1YIZQE3EZVXVQ4ScXjS3a2eW2qI",
  authDomain: "chat-app-a6c5a.firebaseapp.com",
  projectId: "chat-app-a6c5a",
  storageBucket: "chat-app-a6c5a.appspot.com",
  messagingSenderId: "680853470671",
  appId: "1:680853470671:web:de1b43ae2ac4cf67e3a6ba",
  measurementId: "G-6LLS59J530"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
