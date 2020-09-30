import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core';
import { useStylesTag } from './TagStyles';

export type TagProps = MuiChipProps;

export const Tag = (props: TagProps) => {
  const classes = useStylesTag();
  return <MuiChip className={classes.MuiChip} {...props} />;
};
