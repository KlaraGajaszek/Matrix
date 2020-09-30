import React, { FC } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { format } from 'date-fns';
import { useDrag } from 'react-dnd';

import { useStylesTaskCard } from './TaskCardStyles';
import { Tag } from '../Tag/Tag';
import { Task } from '../../models/Task';

export type TaskCardProps = {
  submitFn: () => void;
  task: Task;
};

export const TaskCard: FC<TaskCardProps> = ({ submitFn, task }) => {
  const [, drag] = useDrag({ item: { type: 'task', task } });

  const classes = useStylesTaskCard();

  return (
    <Card className={classes.root} ref={drag}>
      <CardActionArea>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={submitFn}
        >
          <CloseIcon />
        </IconButton>
        <Box>
          <Tag label={task.tag} color="secondary" />
          {task.date && (
            <Tag label={format(task.date, 'dd MM yy')} color="primary" />
          )}
        </Box>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h6" component="h6">
            {task.title}
          </Typography>
          <Typography variant="body2" component="p" className={classes.text}>
            {task.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
