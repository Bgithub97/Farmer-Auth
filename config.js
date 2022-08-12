import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCWf1rnzYn7etIG8d0wH9DkJu--pWtKWOs",
    authDomain: "kisansetu-phone.firebaseapp.com",
    projectId: "kisansetu-phone",
    storageBucket: "kisansetu-phone.appspot.com",
    messagingSenderId: "171423207276",
    appId: "1:171423207276:web:ea38e3f631209a2d3bed49",
    measurementId: "G-8T37PB4D3F"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }