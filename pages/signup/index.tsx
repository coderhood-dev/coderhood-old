import React, { useState } from 'react';
import { FirebaseError } from 'firebase';
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import Router from 'next/router';
import Link from 'next/link';
import { Button, TextField } from '@material-ui/core';
import validate from "./validate";
import { Layout, Flex, Card } from '../../src/components';
import { withFirebase } from '../../firebase';

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
        <Field type="text" name="firstName" />
        <ErrorMessage name="firstName" component="div" />
        <Field type="text" name="lastName" />
        <ErrorMessage name="lastName" component="div" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <Field type="password" name="passwordRepeat" />
        <ErrorMessage name="passwordRepeat" component="div" />
        <button type="submit" disabled={formikProps.isSubmitting}>
          Submit
        </button>
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
