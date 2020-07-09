import React, { useState } from 'react';
import { FirebaseError } from 'firebase';
import Router from 'next/router';

import { Layout } from '../src/components';
import { useAuth } from '../src/hooks';
import SignUpComponent from '../src/components/Form/SignUpComponent';

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const SignUpPage: React.FC = () => {
  const { doCreateUserWithEmailAndPassword } = useAuth();
  const [error, setError] = useState<FirebaseError>(null); // TODO: handle server error

  const handleSubmit = (values) => {
    doCreateUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        Router.push('/');
      })
      .catch((e: FirebaseError) => {
        setError(e);
      });
  };

  return (
    <Layout>
      <h1>SignUp</h1>
      <SignUpComponent onSubmit={handleSubmit} />
    </Layout>
  );
};

export default SignUpPage;
