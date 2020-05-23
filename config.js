import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAFWTgPnVd1wrMo7l0aT3by5YTX1km6V_w",
  authDomain: "booksanta-fd9cc.firebaseapp.com",
  databaseURL: "https://booksanta-fd9cc.firebaseio.com",
  projectId: "booksanta-fd9cc",
  storageBucket: "booksanta-fd9cc.appspot.com",
  messagingSenderId: "429687810278",
  appId: "1:429687810278:web:07900c4264b1e8e5fc3327",
  measurementId: "G-XGPDHFSXSV"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
