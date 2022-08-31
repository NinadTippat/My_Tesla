import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw4CPtUI4ZftVW5b1BWCMM5kFO5gMyoV8",
  authDomain: "tesla-clone-abf83.firebaseapp.com",
  projectId: "tesla-clone-abf83",
  storageBucket: "tesla-clone-abf83.appspot.com",
  messagingSenderId: "598792363077",
  appId: "1:598792363077:web:9684cfcd416d2a28e4172c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
