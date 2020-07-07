import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { FirebaseError } from 'firebase';
import { Button, TextField } from '@material-ui/core';

import { Layout, Flex, Card } from '../src/components';
import { withFirebase } from '../firebase';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
  </div>
);

interface Props {
  firebase: any;
}

const SignIn: React.FC<Props> = ({ firebase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError>(null);

  const onSubmit = (event) => {
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log('user: ', authUser);
        Router.push('/');
      })
      .catch((e: FirebaseError) => {
        console.log(e);
        setError(e);
      });

    event.preventDefault();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (event.target.name === 'email') {
      setEmail(value);
    }
    if (event.target.name === 'password') {
      setPassword(value);
    }
  };

  const isInvalid = password === '' || email === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = withFirebase(SignIn);

export default SignInPage;

export { SignInForm };
