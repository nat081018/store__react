import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDfXDKTGyQNHJJ0jbClUbanH9CdBkEjHM",
    authDomain: "storedb-4a20f.firebaseapp.com",
    databaseURL: "https://storedb-4a20f.firebaseio.com",
    projectId: "storedb-4a20f",
    storageBucket: "storedb-4a20f.appspot.com",
    messagingSenderId: "747551751995",
    appId: "1:747551751995:web:8b5cb46e5b572f205e411e",
    measurementId: "G-WD1GQRVWF6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;