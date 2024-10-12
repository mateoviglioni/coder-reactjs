// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy4zsr7BYol1Z0BVaTKFG8F91-bz8gQJ4",
    authDomain: "coder-reactjs-72d10.firebaseapp.com",
    projectId: "coder-reactjs-72d10",
    storageBucket: "coder-reactjs-72d10.appspot.com",
    messagingSenderId: "26180258226",
    appId: "1:26180258226:web:01cb06829efa02347c7cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
export const db = getFirestore (app)