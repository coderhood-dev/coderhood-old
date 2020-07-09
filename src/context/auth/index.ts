export { AuthContext } from './context';

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

export const initAuth = () => {
  // let auth: firebase.auth.Auth;

  if (!firebase.apps.length) {
    console.log(
      `Initializing Firebase with ${JSON.stringify(config, null, 2)}`
    );
    firebase.initializeApp(config);
    // auth = firebase.auth();
  }

  const doCreateUserWithEmailAndPassword = (
    email: string,
    password: string
  ) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const doSignInWithEmailAndPassword = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const doSignOut = () => {
    return firebase.auth().signOut();
  };

  const doPasswordReset = (email: string) => {
    return firebase.auth().sendPasswordResetEmail(email);
  };

  const doPasswordUpdate = (password: string) => {
    return firebase.auth().currentUser.updatePassword(password);
  };

  const onAuthStateChanged = (
    callback: firebase.Observer<any, Error> | ((a: firebase.User) => any)
  ) => {
    return firebase.auth().onAuthStateChanged(callback);
  };

  return {
    doCreateUserWithEmailAndPassword,
    doSignInWithEmailAndPassword,
    doSignOut,
    doPasswordReset,
    doPasswordUpdate,
    onAuthStateChanged,
  };
};
