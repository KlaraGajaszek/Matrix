import { makeStyles } from '@material-ui/core';

export const useStylesMainView = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '1',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%',
  },
}));
