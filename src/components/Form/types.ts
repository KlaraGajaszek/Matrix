import { FormikConfig } from 'formik';
import { TaskCategory } from '../../models/TaskCategory';

export type FormValues = {
  title: string;
  content: string;
  date: Date | null;
  tag: string;
  category: TaskCategory;
};

export type PropsModal = {
  onClick: () => void;
};

export type FormConfig = FormikConfig<FormValues>;
