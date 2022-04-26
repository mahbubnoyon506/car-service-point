// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2yI0cNGaPCNjuyNMfbVftrQczaHaSHJk",
  authDomain: "genius-car-service-34463.firebaseapp.com",
  projectId: "genius-car-service-34463",
  storageBucket: "genius-car-service-34463.appspot.com",
  messagingSenderId: "550317668221",
  appId: "1:550317668221:web:79a79bae1f8af0a5f6be14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
