import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {

    apiKey: "AIzaSyBfhDWET_37yFK9tFdbaqlyK00xbVIfpK4",
  
    authDomain: "instagram-clone-977fd.firebaseapp.com",
  
    projectId: "instagram-clone-977fd",
  
    storageBucket: "instagram-clone-977fd.appspot.com",
  
    messagingSenderId: "85613833899",
  
    appId: "1:85613833899:web:efccff15b18deb1d4d91ee",
  
    measurementId: "G-N2P5D2DPVD"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { db, auth, storage, provider };

  // export default db;