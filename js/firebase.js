// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup, 

} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { 
    getFirestore, 
    collection, 
    addDoc, 
    serverTimestamp, 
    query, 
    orderBy, 
    doc, 
    getDocs, 
    setDoc ,where
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByd1n_wbvCfjfJYAyNFh-iGPvvEW8f-ug",
  authDomain: "post-app-c32ea.firebaseapp.com",
  projectId: "post-app-c32ea",
  storageBucket: "post-app-c32ea.firebasestorage.app",
  messagingSenderId: "282934029054",
  appId: "1:282934029054:web:50cee2566eb69f206313af",
  measurementId: "G-ZFBB73HP7C"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Export Firebase services and utilities
export { 
    auth, 
    GoogleAuthProvider, 
    provider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    db, 
    doc, 
    setDoc, 
    collection, 
    addDoc, 
    serverTimestamp, 
    query, 
    orderBy, 
    where, 

    getDocs, 
    signInWithPopup 
};