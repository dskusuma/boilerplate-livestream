import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";

// Initialize App
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// Development purpose
window.firebase = firebase;

export default firebase;
