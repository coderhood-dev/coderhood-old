import { FormikErrors } from "formik";

import { IFormValues } from ".";

export default function Validate(
  values: IFormValues
) {
  const errors: FormikErrors<IFormValues> = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    values.password !== values.passwordRepeat
  ) {
    errors.password = 'Passwords must match';
  }

  return errors;

}