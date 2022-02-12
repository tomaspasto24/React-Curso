import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDOdTlEhzkC8Zjyv10l8t6C6EnLvp5ArTA",
    authDomain: "react-app-7a73a.firebaseapp.com",
    projectId: "react-app-7a73a",
    storageBucket: "react-app-7a73a.appspot.com",
    messagingSenderId: "311934771060",
    appId: "1:311934771060:web:515e640c95458ce2259621"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}