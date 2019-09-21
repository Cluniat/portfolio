import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseApp = firebase.initializeApp({apiKey: "%REACT_APP_FIREBASE_KEY%",
    authDomain: "philippine-cluniat.firebaseapp.com",
    databaseURL: "https://philippine-cluniat.firebaseio.com",
    projectId: "philippine-cluniat",
    storageBucket: "",
    messagingSenderId: "562789872348",
    appId: "1:562789872348:web:6bf68189ab672af9ab7a19"}
);

const db = firebaseApp.firestore();

export { db };