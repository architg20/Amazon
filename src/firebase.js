import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZltCPmhimSITQa0tc85qulLifcfngHSQ",
  authDomain: "fir-99098.firebaseapp.com",
  projectId: "fir-99098",
  storageBucket: "fir-99098.appspot.com",
  messagingSenderId: "893164802616",
  appId: "1:893164802616:web:13e6a8e1170aeee5b58ccd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var db = app.firestore();
var auth = firebase.auth();

export {db, auth};