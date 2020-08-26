import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBdnUoE3mMAQBscdMkda_i-7FteUExuxXI",
  authDomain: "crwn-db-aa163.firebaseapp.com",
  databaseURL: "https://crwn-db-aa163.firebaseio.com",
  projectId: "crwn-db-aa163",
  storageBucket: "crwn-db-aa163.appspot.com",
  messagingSenderId: "242898839560",
  appId: "1:242898839560:web:fdaf02654045608d66c9bd",
  measurementId: "G-QQK9BGJGS0"
}; 

firebase.initializeApp(config);

export const creacteUserProfileDocument = async (userAuth, addInitionalData) => {


  if(!userAuth) return;

  const  userRef  = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get() //get from firebase
  // exists from firebase
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();


    try {
      await userRef.set({
        displayName,
        email, 
        createAt,
        ...addInitionalData
      })

    }catch(error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollectionToTheFireStore = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)

   const batch = firestore.batch()

   objectToAdd.forEach((obj) => {
     const newDocRef = collectionRef.doc()
     console.log(newDocRef)
     batch.set(newDocRef, obj)
   })

  console.log(objectToAdd)

  return await batch.commit() // error in this line
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
