// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhK3MzGxVT_cEZF0Eg1b-c4cij1Ltf5ek",
  authDomain: "autism-32725.firebaseapp.com",
  projectId: "autism-32725",
  storageBucket: "autism-32725.appspot.com",
  messagingSenderId: "203259896312",
  appId: "1:203259896312:web:05f5b2cdd7aa02e37cf60d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;