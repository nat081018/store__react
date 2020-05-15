import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdnUoE3mMAQBscdMkda_i-7FteUExuxXI",
  authDomain: "crwn-db-aa163.firebaseapp.com",
  databaseURL: "https://crwn-db-aa163.firebaseio.com",
  projectId: "crwn-db-aa163",
  storageBucket: "crwn-db-aa163.appspot.com",
  messagingSenderId: "242898839560",
  appId: "1:242898839560:web:fdaf02654045608d66c9bd",
  measurementId: "G-QQK9BGJGS0",
};

// firestore
//   .collection("users")
//   .doc("kD7fl1j0z6ClGSkVI4Wq")
//   .collection("cardItems")
//   .doc("");
// firestore.doc("/users/kD7fl1j0z6ClGSkVI4Wq/cardItems/e2QrcIDMKLXIRgJEi46g");
// firestore.collection("/users/kD7fl1j0z6ClGSkVI4Wq/cardItems");

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
