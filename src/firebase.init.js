// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA38Ke9RlzGxCeoXEj1HOdxrzV_wb6O7o",
    authDomain: "electronics-products-9f328.firebaseapp.com",
    projectId: "electronics-products-9f328",
    storageBucket: "electronics-products-9f328.appspot.com",
    messagingSenderId: "713041801230",
    appId: "1:713041801230:web:39d0943fdc55dfde8e4c5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;