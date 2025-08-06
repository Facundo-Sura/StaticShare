// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "staticshare",
  "appId": "1:102764226917:web:a9574aedfcc2cf1485198c",
  "storageBucket": "staticshare.appspot.com",
  "apiKey": "AIzaSyBwQ_D0MkqkPZilklqauP6ODZRHau3B2Mc",
  "authDomain": "staticshare.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "102764226917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
