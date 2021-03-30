import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDN3OLuvrTTjB45ELuL1S_zgrcqiukJsLk",
  authDomain: "praticareact-firebase.firebaseapp.com",
  projectId: "praticareact-firebase",
  storageBucket: "praticareact-firebase.appspot.com",
  messagingSenderId: "639089835868",
  appId: "1:639089835868:web:4c2016ce0b57f2614b4b99"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore() 