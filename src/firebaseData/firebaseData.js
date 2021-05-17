import React from 'react'
import firebase from "firebase";
import 'firebase/firestore'

export const firebaseConfig = {//hold info about firebase and firestore
    apiKey: "AIzaSyAHMl-YErTnel52ociioeo48YO5EznlqLE",
    authDomain: "testinforce-3fa09.firebaseapp.com",
    projectId: "testinforce-3fa09",
    storageBucket: "testinforce-3fa09.appspot.com",
    messagingSenderId: "439003420025",
    appId: "1:439003420025:web:e89510e16ab0d0c07d0ba8",
    measurementId: "G-7WY8HT1GSX"
}

    firebase.initializeApp(firebaseConfig)
    firebase.firestore()

export default firebase