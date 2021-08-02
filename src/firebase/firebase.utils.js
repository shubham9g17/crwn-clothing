import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQvNMf8-Zu-tytiZ-FL6J261WfpvnHSMc",
  authDomain: "crwn-db-fd5c7.firebaseapp.com",
  projectId: "crwn-db-fd5c7",
  storageBucket: "crwn-db-fd5c7.appspot.com",
  messagingSenderId: "197931786095",
  appId: "1:197931786095:web:d9414f5ce6aa3aa7efd29a",
  measurementId: "G-K9NS8J83LW",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
