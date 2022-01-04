import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBfhDWET_37yFK9tFdbaqlyK00xbVIfpK4",
  
    authDomain: "instagram-clone-977fd.firebaseapp.com",
  
    projectId: "instagram-clone-977fd",
  
    storageBucket: "instagram-clone-977fd.appspot.com",
  
    messagingSenderId: "85613833899",
  
    appId: "1:85613833899:web:efccff15b18deb1d4d91ee",
  
    measurementId: "G-N2P5D2DPVD"
  
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

  // export default db;