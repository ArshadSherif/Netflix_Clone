import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyXy-rKx1rdttLiH8OZNgOM0QyWK7wU5E",
  authDomain: "netflix-clone-c229f.firebaseapp.com",
  projectId: "netflix-clone-c229f",
  storageBucket: "netflix-clone-c229f.appspot.com",
  messagingSenderId: "947969191611",
  appId: "1:947969191611:web:19abe5aee8ef3c117b839e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
