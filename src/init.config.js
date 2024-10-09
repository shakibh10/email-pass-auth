// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5q59qqNZKTgJUmGGIMULu-nhGUHjrNgk",
  authDomain: "email-pass-auth-1fb0c.firebaseapp.com",
  projectId: "email-pass-auth-1fb0c",
  storageBucket: "email-pass-auth-1fb0c.appspot.com",
  messagingSenderId: "456503916695",
  appId: "1:456503916695:web:a63a9cc31cc0b2eeec11d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;