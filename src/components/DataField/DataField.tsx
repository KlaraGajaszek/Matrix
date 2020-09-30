import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import 'date-fns';
import { Field } from 'formik';

export type DataFieldProps = {
  name: string;
};

export const DataField = (props: DataFieldProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Field component={KeyboardDatePicker}
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        id="date-picker-inline"
        label="Deadline"
        KeyboardButtonProps={{ 'aria-label': 'change date' }}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};
