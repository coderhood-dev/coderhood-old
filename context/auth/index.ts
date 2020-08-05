export { AuthContext } from './context';

import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
};

export const initAuth = () => {
  if (!firebase.apps.length) {
    console.log(
      `Initializing Firebase with ${JSON.stringify(config, null, 2)}`
    );
    firebase.initializeApp(config);
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
