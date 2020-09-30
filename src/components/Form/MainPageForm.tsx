import React from 'react';
import { Box } from '@material-ui/core';
import { Form, useFormikContext } from 'formik';

import { Button } from '../Button/Button';
import { DataField } from '../DataField/DataField';
import { useStylesForm } from './FormStyles';
import { SelectField } from '../Select/Select';
import { FormikTextField } from '../TextField/TextField';
import { FormValues } from './types';
import { TaskCategory } from '../../models/TaskCategory';

const MainPageForm = () => {
  const classes = useStylesForm();
  const { values } = useFormikContext<FormValues>();

  const hasDate =
    values.category === TaskCategory.UrgentAndNotImportant ||
    values.category === TaskCategory.UrgentAndImportant;

  return (
    <Form>
      <Box className={classes.inputs}>
        <Box className={classes.taskTypeandData}>
          <FormikTextField variant="filled" name="title" label="Task Name" />
          <FormikTextField
            variant="filled"
            multiline
            name="content"
            label="Comment"
          />
          <FormikTextField variant="filled" name="tag" label="Task Label" />
        </Box>
        <Box className={classes.typeandData}>
          <SelectField variant="filled" name="category" label="Task type" />
          {hasDate && <DataField name="date" />}
        </Box>
      </Box>
      <Box className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          type="submit"
        >
          Add new task
        </Button>
      </Box>
    </Form>
  );
};

export default MainPageForm;
