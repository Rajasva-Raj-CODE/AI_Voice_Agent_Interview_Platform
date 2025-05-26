// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPFmI_IONtRJl0ebFkL3ha7lRq-umEnj8",
  authDomain: "prepwise-d08e5.firebaseapp.com",
  projectId: "prepwise-d08e5",
  storageBucket: "prepwise-d08e5.firebasestorage.app",
  messagingSenderId: "808266434118",
  appId: "1:808266434118:web:92065f573f88eb7d98ac47",
  measurementId: "G-2D6VQ9T5TN",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
