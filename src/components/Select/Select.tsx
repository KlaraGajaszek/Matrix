import React from 'react';

import { useStylesSeceltField } from './SelectStyles';
import { FormikTextField, FormikTextFieldProps } from '../TextField/TextField';
import { TaskCategory } from '../../models/TaskCategory';

export const SelectField = (props: FormikTextFieldProps) => {
  const classes = useStylesSeceltField();
  const currencies = [
    {
      value: TaskCategory.UrgentAndImportant,
      label: 'Urgent And Important',
    },
    {
      value: TaskCategory.ImportantNotUrgent,
      label: 'Important Not Urgent',
    },
    {
      value: TaskCategory.UrgentAndNotImportant,
      label: 'Urgent And Not Important',
    },
    {
      value: TaskCategory.NeitherUrgentNotImportant,
      label: 'Neither Urgent Nor Important',
    },
  ];

  return (
    <FormikTextField
      {...props}
      id="outlined-select-currency-native"
      select
      label="Task Type"
      SelectProps={{
        native: true,
      }}
      variant="filled"
      className={classes.textField}
    >
      {currencies.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </FormikTextField>
  );
};
