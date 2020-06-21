import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCSSnscRjsRgCJPvPy5uJe6b9uAu2LilCU",
    authDomain: "completr-1de91.firebaseapp.com",
    databaseURL: "https://completr-1de91.firebaseio.com",
    projectId: "completr-1de91",
    storageBucket: "completr-1de91.appspot.com",
    messagingSenderId: "894325292894",
    appId: "1:894325292894:web:6d31f58489125e6aec99cf"
})

export { firebaseConfig as firebase };