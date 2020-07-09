import React from 'react';
import { Field } from "formik";
import { TextField as MaterialTextField } from '@material-ui/core';

export interface IProps {
  name: string,
  type?: string
}

const TextField = ({ name, type }: IProps) => (
  <Field
    validateOnBlur
    validateOnChange
    name={name}
  >
    {({ field, form }) => (
      <MaterialTextField
        name={name}
        type={type || "text"}
        error={
          Boolean(form.errors[name] && form.touched[name])
        }
        onChange={field.onChange}
        onBlur={field.onBlur}
        helperText={
          form.errors[name] &&
          form.touched[name] &&
          String(form.errors[name])
        }
      />
    )
    }
  </Field>
)

export default TextField