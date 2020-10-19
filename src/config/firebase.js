import firebase from "firebase";
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAdxw4uCHo2svHj4cBh_1jC3zTAggGmlOE",
    authDomain: "asischeck.firebaseapp.com",
    databaseURL: "https://asischeck.firebaseio.com",
    projectId: "asischeck",
    storageBucket: "asischeck.appspot.com",
    messagingSenderId: "601682547965",
    appId: "1:601682547965:web:fcb35f4d2fed5977439a94"
  };

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {fire as default, firebase, storage};