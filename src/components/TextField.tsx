import React from 'react';
import { Field } from 'formik';
import { Input } from '@chakra-ui/core';

export interface IProps {
  name: string;
  type?: string;
  placeholder?: string;
}

const TextField = ({ name, type, placeholder }: IProps) => (
  <Field validateOnBlur validateOnChange name={name}>
    {({ field, form }) => (
      <Input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        isInvalid={Boolean(form.errors[name] && form.touched[name])}
        errorBorderColor="red.300"
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    )}
  </Field>
);

export default TextField;
