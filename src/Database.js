// export const db = !firebase.apps.length ? firebase.initializeApp(config).database() : firebase.app().database();

import Firebase from "firebase";
// FIREBASE INIT
var config = {
  apiKey: "AIzaSyBoOMetLGKFPqcNNU3W3H9FMVDPMbDF-NE",
  authDomain: "restaurant-1f0e7.firebaseapp.com",
  databaseURL: "https://restaurant-1f0e7.firebaseio.com",
  projectId: "restaurant-1f0e7",
  storageBucket: "restaurant-1f0e7.appspot.com",
  messagingSenderId: "742376087926"
};

// var config = {
//     apiKey: "AIzaSyCnloo8cxSv6pKDjTjiiWEMJ3zBsfwtEZc",
//     authDomain: "restau-buffa.firebaseapp.com",
//     databaseURL: "https://restau-buffa.firebaseio.com",
//     projectId: "restau-buffa",
//     storageBucket: "restau-buffa.appspot.com",
//     messagingSenderId: "601728809240"
//   };
  var firebaseApp = Firebase.initializeApp(config);

export const db = firebaseApp.database();
export const storage = firebaseApp.storage();