import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField, { Input } from '@material/react-text-field';
import styled from '@emotion/styled';

const TextFieldCustom = styled(TextField)`
  margin: 2px 0;
  width: 300px;
`;

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
        <TextFieldCustom label={placeholder}>
          <Input
            type={type || 'text'}
            name={name}
            isValid={!Boolean(form.errors[name] && form.touched[name])}
            onChange={field.onChange}
            value={field.value}
          />
        </TextFieldCustom>
        <ErrorMessageCustom component="span" name={name} />
      </>
    )}
  </Field>
);

export default TextFieldInput;
