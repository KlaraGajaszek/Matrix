import React from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';

import { useStylesButton } from './ButtonStyles';

export type ButtonProps = MuiButtonProps;

export const Button = (props: ButtonProps) => {
  const classes = useStylesButton();
  return <MuiButton className={classes.button} {...props} />;
};
