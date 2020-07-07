import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

class Firebase {
  auth: firebase.auth.Auth;

  constructor() {
    // prevents that the server creates multiple instances of firebase
    if (!firebase.apps.length) {
      console.log(
        `Initializing Firebase with ${JSON.stringify(config, null, 2)}`
      );
      firebase.initializeApp(config);

      this.auth = firebase.auth();
    }
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email: string, password: string) => {
    return this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => {
    return this.auth.signOut();
  };

  doPasswordReset = (email: string) => {
    return this.auth.sendPasswordResetEmail(email);
  };

  doPasswordUpdate = (password: string) => {
    return this.auth.currentUser.updatePassword(password);
  };
}

export default Firebase;
