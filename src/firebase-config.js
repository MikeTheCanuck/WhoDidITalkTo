// App/firebase-config.js
// lifted with pride from https://dev.codetrick.net/how-to-create-a-reddit-clone-using-react-and-firebase/

import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBfB4EZodOyxHx3v-pzAxn-cNXHXd7SnmI",
    authDomain: "whodiditalkto.firebaseapp.com",
    databaseURL: "https://whodiditalkto.firebaseio.com",
    projectId: "whodiditalkto",
    storageBucket: "whodiditalkto.appspot.com",
    messagingSenderId: "478743607097"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;