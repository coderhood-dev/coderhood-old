import React, { useState } from 'react';
import { FirebaseError } from 'firebase';
import Router from 'next/router';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import { Layout } from '../../src/components';
import { withFirebase } from '../../firebase';
import SignUpComponent from '../../src/components/Form/SignUpComponent';

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
  const [error, setError] = useState<FirebaseError>(null);

  const handleSubmit = (values) => {
    firebase
      .doCreateUserWithEmailAndPassword(values.email, values.password)
      .then((authUser) => {
        console.log('user created: ', authUser);
        Router.push('/');
      })
      .catch((e: FirebaseError) => {
        console.log(e);
        setError(e);
      });
  };

  return (
    <SignUpComponent onSubmit={handleSubmit} />
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

