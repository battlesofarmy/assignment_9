// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrwMN3Dh0y3lNh8xMFh3U3U3Fq-usI_w",
  authDomain: "assingmnet.firebaseapp.com",
  projectId: "assingmnet",
  storageBucket: "assingmnet.appspot.com",
  messagingSenderId: "997236695805",
  appId: "1:997236695805:web:2cef33883088d534fcd494"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;