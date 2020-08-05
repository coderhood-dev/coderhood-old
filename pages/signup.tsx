import React, { useState } from 'react';
import { Heading } from '@chakra-ui/core';
import { FirebaseError } from 'firebase';
import { FormikErrors } from 'formik';
import Router from 'next/router';

import { Layout, Form, TextField, Text } from '../components';
import { useAuth } from '../hooks';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const SignUpPage: React.FC = () => {
  const { doCreateUserWithEmailAndPassword } = useAuth();
  const [error, setError] = useState<FirebaseError>(null); // TODO: handle server error

  const handleSubmit = (values: FormValues) => {
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
      <Heading>Hey!</Heading>
      <Text>Sumate a nuestra comunidad de devs autodidactas</Text>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          passwordRepeat: '',
        }}
        validate={validate}
      >
        <TextField name="firstName" placeholder="First name" />
        <TextField name="lastName" placeholder="Last name" />
        <TextField name="email" type="email" placeholder="Email" />
        <TextField name="password" type="password" placeholder="Password" />
        <TextField
          name="passwordRepeat"
          type="password"
          placeholder="Repeat password"
        />
      </Form>
    </Layout>
  );
};

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password !== values.passwordRepeat) {
    errors.password = 'Passwords must match';
  }

  return errors;
};

export default SignUpPage;
