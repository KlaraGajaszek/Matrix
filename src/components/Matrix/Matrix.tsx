import React from 'react';
import { Box } from '@material-ui/core';

import { useStylesMatrix } from './MatrixStyles';
import { TasksContext } from '../../contexts/TasksContext';
import { MatrixTile } from '../MatrixTile/MatrixTile';
import { TaskCategory } from '../../models/TaskCategory';

const Matrix = (): JSX.Element => {
  const { tasks } = TasksContext.useContainer();
  const classes = useStylesMatrix();
  return (
    <Box className={classes.root}>
      <Box className={classes.matrix}>
        <MatrixTile
          categoryTitle={'Urgent and important'}
          taskCategory={tasks.UrgentAndImportant}
          categoryName={TaskCategory.UrgentAndImportant}
        />
        <MatrixTile
          categoryTitle={'Important but not urgent'}
          taskCategory={tasks.ImportantNotUrgent}
          categoryName={TaskCategory.ImportantNotUrgent}
        />
      </Box>
      <Box className={classes.matrix}>
        <MatrixTile
          categoryTitle={'Urgent but not important'}
          taskCategory={tasks.UrgentAndNotImportant}
          categoryName={TaskCategory.UrgentAndNotImportant}
        />
        <MatrixTile
          categoryTitle={'Neither urgent nor important'}
          taskCategory={tasks.NeitherUrgentNotImportant}
          categoryName={TaskCategory.NeitherUrgentNotImportant}
        />
      </Box>
    </Box>
  );
};

export default Matrix;
