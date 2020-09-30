import React, { FC } from 'react';
import { Field } from 'formik';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core';

import { TextField as FTextField } from 'formik-material-ui';
import { useStylesTextField } from './TextFieldStyles';

export type FormikTextFieldProps = MuiTextFieldProps & {
  name: string;
};

export const FormikTextField: FC<FormikTextFieldProps> = (props) => {
  const classes = useStylesTextField();

  return (
    <Field
      component={FTextField}
      autoComplete="off"
      className={classes.textField}
      {...props}
    />
  );
};
