// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9ot59a-WdjxRBxDoQ7I2I8R4ow7y0rk",
  authDomain: "instagram-clone-90608.firebaseapp.com",
  projectId: "instagram-clone-90608",
  storageBucket: "instagram-clone-90608.appspot.com",
  messagingSenderId: "511803962535",
  appId: "1:511803962535:web:0c1fb24c48112a531f5782"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };