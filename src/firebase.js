// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjv5xm5czfSN0alfYaokV5oU4uSDaXBSw",
  authDomain: "realtor-clone-react-f73aa.firebaseapp.com",
  projectId: "realtor-clone-react-f73aa",
  storageBucket: "realtor-clone-react-f73aa.appspot.com",
  messagingSenderId: "886082811165",
  appId: "1:886082811165:web:0867b0cdfcbe9a994a5df4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();