import React from 'react';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import MaterialTextField, { Input } from '@material/react-text-field';
import styled from '@emotion/styled';

const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  padding-left: 10px;
  color: #b91e3a;
`;

export interface Props {
  name: string;
  type?: string;
  placeholder?: string;
}

export const TextField = ({ name, type, placeholder }: Props) => (
  <Field validateOnBlur validateOnChange name={name}>
    {({ field, form }) => (
      <>
        <MaterialTextField label={placeholder}>
          <Input
            type={type || 'text'}
            name={name}
            isValid={!Boolean(form.errors[name] && form.touched[name])}
            onChange={field.onChange}
            value={field.value}
          />
        </MaterialTextField>
        <ErrorMessage component="span" name={name} />
      </>
    )}
  </Field>
);
