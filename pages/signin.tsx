import React, { useState } from 'react';
import Router from 'next/router';
import { FirebaseError } from 'firebase';

import { Layout } from '../src/components';
import { useAuth } from '../src/hooks';

const SignInPage = () => (
  <Layout>
    <h1>SignIn</h1>
    <SignInForm />
  </Layout>
);

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError>(null);
  const { doSignInWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    doSignInWithEmailAndPassword(email, password)
      .then(() => {
        Router.push('/');
      })
      .catch((e: FirebaseError) => {
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
      <button
        disabled={isInvalid}
        type="submit"
        style={{
          margin: 100,
        }}
      >
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = SignIn;

export default SignInPage;
