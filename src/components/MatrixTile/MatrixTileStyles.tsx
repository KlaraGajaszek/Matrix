import { makeStyles } from '@material-ui/core';

export const useStylesMatrixTile = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '42vh',
    boxShadow:
      '0 2px 4px 0 rgba(47, 84, 235, 0.15), 0 8px 16px 0 rgba(47, 84, 235, 0.15)',
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.background.overlay,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'auto',
    [theme.breakpoints.up('lg')]: {
      minWidth: 500,
      width: '90%',
      margin: '15px 0px 15px 45px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      margin: '5px 0 5px 0',
    },
  },
  header: {
    color: theme.palette.primary.dark,
    textAlign: 'center',
    marginTop: 15,
    fontSize: theme.typography.h5.fontSize,
  },
}));
