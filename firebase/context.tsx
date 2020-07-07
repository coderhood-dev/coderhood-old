import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = (Component: React.ElementType) => (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
