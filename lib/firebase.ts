import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBU6saPYiIox_QKO859hoX8e89UM018Rwo",
    authDomain: "blognextjs-c8ab6.firebaseapp.com",
    projectId: "blognextjs-c8ab6",
    storageBucket: "blognextjs-c8ab6.appspot.com", 
    messagingSenderId: "475342720778",
    appId: "1:475342720778:web:3df7d34ee23786146934f3"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
