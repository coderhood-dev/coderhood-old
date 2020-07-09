import React, { useState } from 'react';
import { FirebaseError } from 'firebase';
import { Formik, Form, FormikProps } from "formik";
import Router from 'next/router';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import validate from "./validate";

import { Layout, Flex } from '../../src/components';
import { withFirebase } from '../../firebase';
import TextField from '../../src/components/TextField';

const SignUpPage = () => (
  <Layout>
    <h1>SignUp</h1>
    <SignUpForm />
  </Layout>
);

interface Props {
  firebase: any;
}

export interface IFormValues {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordRepeat: string
}

const SignUp: React.FC<Props> = ({ firebase }) => {
  const [error, setError] = useState<FirebaseError>(null);
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }

  const onSubmit = (values) => {
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
    
      <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {(formikProps: FormikProps<IFormValues>) => (
        <Form>
          <Flex direction="column">
            <TextField name="firstName" />
            <TextField name="lastName" />
            <TextField name="email" type="email" />
            <TextField name="password" type="password" />
            <TextField name="passwordRepeat" type="password" />

            <button type="submit" disabled={formikProps.isSubmitting}>
              Submit
            </button>
          </Flex>
        </Form>
      )}
    </Formik>
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

