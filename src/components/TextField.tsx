import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField, { Input } from '@material/react-text-field';
import styled from '@emotion/styled';

const ErrorMessageCustom = styled(ErrorMessage)`
  font-size: 12px;
  padding-left: 10px;
  color: #b91e3a;
`;

export interface IProps {
  name: string;
  type?: string;
  placeholder?: string;
}

const TextFieldInput = ({ name, type, placeholder }: IProps) => (
  <Field validateOnBlur validateOnChange name={name}>
    {({ field, form }) => (
      <>
        <TextField label={placeholder}>
          <Input
            type={type || 'text'}
            name={name}
            isValid={!Boolean(form.errors[name] && form.touched[name])}
            onChange={field.onChange}
            value={field.value}
          />
        </TextField>
        <ErrorMessageCustom component="span" name={name} />
      </>
    )}
  </Field>
);

export default TextFieldInput;
