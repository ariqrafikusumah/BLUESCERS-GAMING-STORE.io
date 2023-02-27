// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1bwAftQU92jMWsvLcKf0s91fyShSK85k",
  authDomain: "bluescers-gaming-store.firebaseapp.com",
  databaseURL: "https://bluescers-gaming-store-default-rtdb.firebaseio.com",
  projectId: "bluescers-gaming-store",
  storageBucket: "bluescers-gaming-store.appspot.com",
  messagingSenderId: "172911468997",
  appId: "1:172911468997:web:a079eb8cff823755c8ebac",
  measurementId: "G-3F3DHF8277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
