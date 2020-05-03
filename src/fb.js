import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBe-CJK90bCJQX5FAewIE0m9kUWiAM6-P0",
    authDomain: "todoproject-vuetify.firebaseapp.com",
    databaseURL: "https://todoproject-vuetify.firebaseio.com",
    projectId: "todoproject-vuetify",
    storageBucket: "todoproject-vuetify.appspot.com",
    messagingSenderId: "92305194696",
    appId: "1:92305194696:web:509208cca7953bd5d02ffd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//db.settings({ timestampsInSnapshots: true })

export default db;