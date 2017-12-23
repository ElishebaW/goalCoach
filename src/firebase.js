import * as firebase from 'firebase';

  const config = {
      apiKey: "AIzaSyC4O5KnKti7bIS-wsjEUyzKOZFtRO1b1Ms",
      authDomain: "goalcoach-6ba32.firebaseapp.com",
      databaseURL: "https://goalcoach-6ba32.firebaseio.com",
      projectId: "goalcoach-6ba32",
      storageBucket: "",
      messagingSenderId: "785704028589"
    };

  export const firebaseApp = firebase.initializeApp(config)
