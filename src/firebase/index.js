import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz9AwiWT6OX8SiM1zGiMbBZEPYOjr1HrQ",
  authDomain: "myblog-265b0.firebaseapp.com",
  projectId: "myblog-265b0",
  storageBucket: "myblog-265b0.appspot.com",
  messagingSenderId: "646919976292",
  appId: "1:646919976292:web:1795977fc00a75f9e8f671"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();