import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { v4 as uuidv4 } from 'uuid';
import { NewTask, Task } from '../models/Task';
import { TaskCategory } from '../models/TaskCategory';

const initialGroupedTasks: Record<TaskCategory, Task[]> = {
  [TaskCategory.UrgentAndImportant]: [],
  [TaskCategory.ImportantNotUrgent]: [],
  [TaskCategory.UrgentAndNotImportant]: [],
  [TaskCategory.NeitherUrgentNotImportant]: [],
};

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: NewTask) => {
    const newTask = { id: uuidv4(), ...task };

    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskToUpdate: Task) => {
    const newTasks = tasks.map((task) =>
      task.id === taskToUpdate.id ? taskToUpdate : task
    );

    setTasks(newTasks);
  };

  const deleteTask = (id: Task['id']) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const groupedTasks = tasks.reduce((acc, task) => {
    return { ...acc, [task.category]: [...acc[task.category], task] };
  }, initialGroupedTasks);

  return {
    createTask,
    updateTask,
    deleteTask,
    tasks: groupedTasks,
  };
};

export const TasksContext = createContainer(useTasks);
