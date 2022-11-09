import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  onSnapshot,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8F5HlrnaVajUSCXHn19RW5lcqHXctrLw",
  authDomain: "blateroo.firebaseapp.com",
  projectId: "blateroo",
  storageBucket: "blateroo.appspot.com",
  messagingSenderId: "435134040175",
  appId: "1:435134040175:web:6c573d6287899feecc259a",
  measurementId: "G-5W2JBRLBY5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  onSnapshot,
  doc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};
