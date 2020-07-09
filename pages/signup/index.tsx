import React, { useState } from 'react';
import { FirebaseError } from 'firebase';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import Router from 'next/router';
import { TextField } from '@material-ui/core';
import validate from './validate';
import { Layout } from '../../src/components';
import { useAuth } from '../../src/hooks';

const SignUpPage = () => (
  <Layout>
    <h1>SignUp</h1>
    <SignUpForm />
  </Layout>
);

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const SignUp: React.FC = () => {
  const { doCreateUserWithEmailAndPassword } = useAuth();
  const [error, setError] = useState<FirebaseError>(null);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: '',
  };

  const onSubmit = (values) => {
    doCreateUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        Router.push('/');
      })
      .catch((e: FirebaseError) => {
        setError(e);
      });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {(formikProps: FormikProps<IFormValues>) => (
          <Form>
            <Field type="text" name="firstName" component={TextField} />
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
      {error && <p>{error.message}</p>}
    </>
  );
};

const SignUpForm = SignUp;

export default SignUpPage;
