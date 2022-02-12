import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore"

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyCvpSyW_WCz1VvOR_JHoh1YosY78uXPnNc",
  authDomain: "bitcoin-project-72f67.firebaseapp.com",
  databaseURL: "https://bitcoin-project-72f67-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bitcoin-project-72f67",
  storageBucket: "bitcoin-project-72f67.appspot.com",
  messagingSenderId: "939112137370",
  appId: "1:939112137370:web:8f6925fc0cfd2a92b41523",
  measurementId: "G-9SRQR5EY5R"
});

// Firebase intialization

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const db = getFirestore();

export default firebase;