import { TaskCategory } from "./TaskCategory";

export type Task = {
  id: string;
  title: string;
  content: string;
  date: Date | null;
  tag: string;
  category: TaskCategory;
};

export type NewTask = Omit<Task, 'id'>;