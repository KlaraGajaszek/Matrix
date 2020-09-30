import { makeStyles } from '@material-ui/core';

export const useStylesMatrix = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  matrix: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
    },
  },
}));
