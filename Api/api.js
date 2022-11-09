import { async } from "@firebase/util";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  doc,
  db,
  setDoc,
  getDoc,
} from "../Config/Firebase";

export const createUser = async (email, password) => {
  try {
    let { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    // return error;
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    let { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    // return error;
    console.log(error);
  }
};

export const currentAuthState = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      let data = await getSpecificDocument(user?.uid, "users");
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      console.log("Not Sign in");
    }
  });
};

export const saveSpecificDocument = async (id, data) => {
  try {
    let refToDoc = doc(db, "users", id);
    await setDoc(refToDoc, data);
    return "Document Saved";
  } catch (error) {
    // return error;
    console.log(error);
  }
};

export const getSpecificDocument = async (id, collectionName) => {
  try {
    let refToDoc = doc(db, collectionName, id);
    let data = await getDoc(refToDoc);
    return data?.data();
  } catch (error) {
    console.log(error);
  }
};
