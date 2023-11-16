console.log("qwert")

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBvIunSlH4eA9dSC4B_DRJo_vUdxkmfYqo",
    authDomain: "telegram-c21d3.firebaseapp.com",
    databaseURL: "https://telegram-c21d3-default-rtdb.firebaseio.com",
    projectId: "telegram-c21d3",
    storageBucket: "telegram-c21d3.appspot.com",
    messagingSenderId: "123459326485",
    appId: "1:123459326485:web:f3efb71334b2e618f6341c",
    measurementId: "G-YQQCEQ70H1"
};
console.log("qwert")
// Initialize Firebase
firebase.initializeApp(firebaseConfig);