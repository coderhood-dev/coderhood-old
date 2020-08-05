import { createContext } from 'react';

// TODO: type this
interface Auth {
  doCreateUserWithEmailAndPassword: any;
  doSignInWithEmailAndPassword: any;
  doSignOut: any;
  doPasswordReset: any;
  doPasswordUpdate: any;
  onAuthStateChanged: any;
  user: any;
}

export const AuthContext = createContext<Auth>(null);
