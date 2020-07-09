import React from 'react';
import { Formik, Form, FormikProps } from "formik";

import validate from "./validate";

import { Flex, TextField } from '../../'

export interface IProps {
  onSubmit: (values: IFormValues) => void
}

export interface IFormValues {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordRepeat: string
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordRepeat: ''
}

const SignUpComponent = ({ onSubmit }: IProps) => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
  >
    {(formikProps: FormikProps<IFormValues>) => (
      <Form>
        <Flex direction="column">
          <TextField name="firstName" placeholder="First name" />
          <TextField name="lastName" placeholder="Last name" />
          <TextField name="email" type="email" placeholder="Email" />
          <TextField name="password" type="password" placeholder="Password" />
          <TextField name="passwordRepeat" type="password" placeholder="Repeat password" />

          <button type="submit" disabled={formikProps.isSubmitting}>
            Submit
            </button>
        </Flex>
      </Form>
    )}
  </Formik>
)

export default SignUpComponent;