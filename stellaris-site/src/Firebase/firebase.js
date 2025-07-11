// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoECn1sQ4g1MgzP_r83OT1DCijCzSB18c",
  authDomain: "stellarissite.firebaseapp.com",
  projectId: "stellarissite",
  storageBucket: "stellarissite.firebasestorage.app",
  messagingSenderId: "1089047645064",
  appId: "1:1089047645064:web:f9c283bc60bc92fcd5083d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };