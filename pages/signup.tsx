import React, { useState } from 'react';
import { FirebaseError } from 'firebase';
import Router from 'next/router';
import Link from 'next/link';
import { Button, TextField } from '@material-ui/core';
import { Layout, Flex, Card } from '../src/components';
import { withFirebase } from '../firebase';

const SignUpPage = () => (
  <Layout>
    <h1>SignUp</h1>
    <SignUpForm />
  </Layout>
);

interface Props {
  firebase: any;
}

const SignUp: React.FC<Props> = ({ firebase }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState<FirebaseError>(null);

  const onSubmit = (event) => {
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log('user created: ', authUser);
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
    switch (event.target.name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'passwordRepeat':
        setPasswordRepeat(value);
        break;
    }
  };

  const isInvalid =
    password !== passwordRepeat ||
    password === '' ||
    email === '' ||
    firstName === '' ||
    lastName === '';

  return (
    <form onSubmit={onSubmit}>
      <Flex>
        <TextField
          id="signup-first-name"
          label="Nombre"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
        <TextField
          id="signup-last-name"
          label="Apellido"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
        <TextField
          id="signup-email"
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <TextField
          id="signup-password"
          label="Contraseña"
          name="password"
          value={password}
          onChange={onChange}
        />
        <TextField
          id="signup-password-validate"
          label="Repite la contraseña"
          name="passwordRepeat"
          value={passwordRepeat}
          onChange={onChange}
        />
      </Flex>
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignUpForm = withFirebase(SignUp);

const SignUpLink = () => (
  <p>
    Don't have an account?{' '}
    <Link href="/signin">
      <Button color="inherit">Iniciar sesión</Button>
    </Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink }; // TODO: maybe it's not needed to export this
