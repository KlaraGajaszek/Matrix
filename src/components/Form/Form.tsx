import React, { FC } from 'react';
import * as Yup from 'yup';
import { Box } from '@material-ui/core';
import { Formik } from 'formik';

import { useStylesForm } from './FormStyles';
import { FormValues, FormConfig, PropsModal } from './types';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { TasksContext } from '../../contexts/TasksContext';
import MainPageForm from './MainPageForm';
import { TaskCategory } from '../../models/TaskCategory';

const initialValues: FormValues = {
  title: '',
  content: '',
  date: null,
  tag: '',
  category: TaskCategory.UrgentAndImportant,
};

const validationSchema = Yup.object().shape({
  title: Yup.string().label('Task name').required(),
});

const Form: FC<PropsModal> = ({ onClick }) => {
  const classes = useStylesForm();
  const { createTask } = TasksContext.useContainer();

  const handleSubmit: FormConfig['onSubmit'] = (values, helpers) => {
    createTask(values);

    helpers.resetForm();
    onClick();
  };

  return (
    <Box className={classes.main}>
      <Box className={classes.mainContent}>
        <SectionTitle className={classes.title}>Add new task</SectionTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <MainPageForm />
        </Formik>
      </Box>
    </Box>
  );
};

export default Form;
