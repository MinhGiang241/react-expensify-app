// importScripts("https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"
// );
// import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/database";

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database
//   .ref("expenses")
//   .push({ description: "adc", note: "", amount: 109500, createdAt: 2 })
//   .then((ref) => {
//     console.log(ref.key);
//   });

// const expenses = [
//   {
//     description: "Gum",
//     note: "",
//     amount: 195,
//     createdAt: 0,
//   },
//   {
//     description: "Rent",
//     note: "",
//     amount: 109500,
//     createdAt: 2,
//   },
//   {
//     description: "Credit Card",
//     note: "",
//     amount: 4500,
//     createdAt: 8,
//   },
// ];

// expenses.forEach((expense) => {
//   database.ref("expenses").push(expense);
// });

// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const exp = [];
//     snapshot.forEach((childSnapshot) => {
//       exp.push({
//         ...childSnapshot.val(),
//         id: childSnapshot.key,
//       });
//     });
//     console.log(exp);
//   });

// expenses.forEach((expense) => {
//   database.ref("expenses").push(expense);
// });

// database.ref().once("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref("name")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Minh Giang",
//     age: 29,
//     stressLevel: 6,
//     job: {
//       title: "software developer",
//       company: "Google",
//     },
//     isSingle: true,
//     location: {
//       city: "Namdinh",
//       country: "Vietnam",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("this fail", e);
//   });

// database.ref().update({
//   name: "Mike",
//   age: 25,
//   stressLevel: 9,
//   "location/city": "Seattle",
//   "job/company": "Amazone",
// });

// database.ref("age").set(28);
// database.ref("location/city").set("Hanoi");

// database
//   .ref("attribute")
//   .set({
//     height: 176,
//     weight: 64,
//   })
//   .then(() => {
//     console.log("second set call worked");
//   })
//   .catch(() => {
//     console.log("thing didnt second set call worked");
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data was removed");
//   })
//   .catch(() => {
//     console.log("didnot remove data");
//   });
