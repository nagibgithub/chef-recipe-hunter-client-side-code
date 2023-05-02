// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy48LCPUpSvVrbyj3V07JqcIkY1rO6SZc",
    authDomain: "test-of-radhuni.firebaseapp.com",
    projectId: "test-of-radhuni",
    storageBucket: "test-of-radhuni.appspot.com",
    messagingSenderId: "508919482027",
    appId: "1:508919482027:web:1fb4ed78e5c31d7dfe99ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app