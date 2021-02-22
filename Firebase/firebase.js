const firebase = require("firebase");
// const firebaseui = require('firebaseui');
// require("firebase/auth");
// require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBG0P0Q_8n4ITxc6H5VBPkQPIC5Lj3sTZo",
  authDomain: "naises-b7e44.firebaseapp.com",
  databaseURL: "https://naises-b7e44.firebaseio.com",
  projectId: "naises-b7e44",
  storageBucket: "naises-b7e44.appspot.com",
  messagingSenderId: "549689157204",
  appId: "1:549689157204:web:cb307a97d37ee72fce6fc1",
  measurementId: "G-B3GQ9396XT"
};

firebase.initializeApp(firebaseConfig)

const dbref = firebase.database().ref()

// dbref.child('users/xlincw0w').on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

dbref.on("value", (snap) => {
  console.log(snap.val())
})
