import firebase from 'firebase';

const config= {
    apiKey: "AIzaSyBFmHfWbj9vpPSsZqWltEFP9b2pLSm5_28",
    authDomain: "superservicedemo.firebaseapp.com",
    databaseURL: "https://superservicedemo.firebaseio.com",
    projectId: "superservicedemo",
    storageBucket: "superservicedemo.appspot.com",
    messagingSenderId: "118751834634",
    appId: "1:118751834634:web:530a505e1a9df0c03825f3"
  };
firebase.initializeApp(config);
export default firebase;