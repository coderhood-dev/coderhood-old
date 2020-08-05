import React from 'react';
import {
  Formik,
  Form as FormikForm,
  FormikProps,
  FormikValues,
  FormikErrors,
} from 'formik';
import { Flex, Button } from '@chakra-ui/core';

import { Props as TextFieldProps } from './TextField';

export interface Props<Values extends FormikValues> {
  onSubmit: (values: Values) => void;
  initialValues: Values;
  children: React.ReactElement<TextFieldProps>[];
  validate?: (values: Values) => FormikErrors<Values>;
}

export const Form: React.FC<Props<FormikValues>> = ({
  onSubmit,
  initialValues,
  children,
  validate,
}) => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {(formikProps: FormikProps<FormikValues>) => (
      <FormikForm>
        <Flex direction="column">
          {children}
          <Button type="submit" isDisabled={formikProps.isSubmitting}>
            Submit
          </Button>
        </Flex>
      </FormikForm>
    )}
  </Formik>
);
