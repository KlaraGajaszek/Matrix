import React, { FC } from 'react';
import { DragObjectWithType, useDrop } from 'react-dnd';
import { Card, Typography } from '@material-ui/core';

import { TaskCard } from '../TaskCard/TaskCard';
import { MatrixTileProps } from './types';
import { useStylesMatrixTile } from './MatrixTileStyles';
import { TasksContext } from '../../contexts/TasksContext';
import { Task } from '../../models/Task';

type DraggedTask = DragObjectWithType & {
  task: Task;
};

export const MatrixTile: FC<MatrixTileProps> = ({
  categoryTitle,
  taskCategory,
  categoryName,
}) => {
  const { updateTask, deleteTask } = TasksContext.useContainer();
  const classes = useStylesMatrixTile();

  const [, drop] = useDrop({
    accept: 'task',
    drop: ({ task }: DraggedTask) => {
      updateTask({ ...task, category: categoryName });
    },
  });

  return (
    <Card ref={drop} className={classes.root}>
      <Typography className={classes.header}>{categoryTitle}</Typography>
      {taskCategory.map((task) => (
        <TaskCard
          key={task.id}
          submitFn={() => deleteTask(task.id)}
          task={task}
        />
      ))}
    </Card>
  );
};
