import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

//   // En caso de testeo.
// const firebaseConfigTesting = {
//     apiKey: "AIzaSyDJi_esAaX_eGAZpXRSU5hGqAtEL_aQ2e4",
//     authDomain: "testing-b1b89.firebaseapp.com",
//     projectId: "testing-b1b89",
//     storageBucket: "testing-b1b89.appspot.com",
//     messagingSenderId: "286055534703",
//     appId: "1:286055534703:web:f985ad5aacfd2b34b07d9a"
// };

// if ( process.env.NODE_ENV === 'test' ) {
//   firebase.initializeApp(firebaseConfigTesting);
// } else {
//   firebase.initializeApp(firebaseConfig);
// }
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}