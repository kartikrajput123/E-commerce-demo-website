import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBSqTxNKm-qbWfJXV8Q4mGI8ZMj_tGVIbk",
  authDomain: "clone-584cc.firebaseapp.com",
  projectId: "clone-584cc",
  storageBucket: "clone-584cc.appspot.com",
  messagingSenderId: "138592227115",
  appId: "1:138592227115:web:fccad6ff76333ad7fa7f6e",
  measurementId: "G-0B7P4Q0JG2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)  
  
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };