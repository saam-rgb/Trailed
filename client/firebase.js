// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBL8gCAGQw99E_fUZHhfchGU4a6a6Opatk",

  authDomain: "trailed-16.firebaseapp.com",

  projectId: "trailed-16",

  storageBucket: "trailed-16.appspot.com",

  messagingSenderId: "129523885921",

  appId: "1:129523885921:web:ec5007daa095f649c44720",

  measurementId: "G-DSY1L7484F",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;
