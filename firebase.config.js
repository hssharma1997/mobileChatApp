import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey:  "AIzaSyBJVb9pewxuDdBJSkwlN2ExownugJs1Sas",
  authDomain: "chatapp-8fb66.firebaseapp.com",
  databaseURL: "https://chatapp-8fb66-default-rtdb.firebaseio.com",
  projectId: "chatapp-8fb66",
  storageBucket: "chatapp-8fb66.appspot.com",
  messagingSenderId: "602761247435",
  appId: "1:602761247435:android:5cd0ca95892804a86f794e",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };