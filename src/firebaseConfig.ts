import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuw-1nqwUU0tWmIZBtmP2CDdOC3N1Bbkw",
  authDomain: "app2023a-6a6d4.firebaseapp.com",
  databaseURL: "https://app2023a-6a6d4-default-rtdb.firebaseio.com",
  projectId: "app2023a-6a6d4",
  storageBucket: "app2023a-6a6d4.appspot.com",
  messagingSenderId: "715579431222",
  appId: "1:715579431222:web:5a36aa690fd36ab5a6bb97",
  measurementId: "G-TFRMGZNV3Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Obtén una referencia a la Realtime Database
const database = firebase.database();

// Obtén una referencia al Storage de Firebase
const storage = firebase.storage();

export { database, storage };
