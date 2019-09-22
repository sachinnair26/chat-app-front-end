import firebase from 'firebase'
 
 var firebase_config = {
    apiKey: "AIzaSyDgH61m97kiNuxCvybcGxJcuhzt51rpyM8",
    authDomain: "sachin-42fdd.firebaseapp.com",
    databaseURL: "https://sachin-42fdd.firebaseio.com",
    projectId: "sachin-42fdd",
    storageBucket: "sachin-42fdd.appspot.com",
    messagingSenderId: "167174121160",
    appId: "1:167174121160:web:3da5f5f7ba55f5c0"
  };

firebase.initializeApp(firebase_config)
export const db = firebase.database()

export const auth = firebase.auth()
