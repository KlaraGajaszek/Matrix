import { makeStyles } from '@material-ui/core';

const contactPageItemShadow = '0 40px 50px 0 rgba(103, 118, 128, 0.1)';

export const useStylesForm = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      padding: theme.spacing(8, 8, 8, 8),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      padding: theme.spacing(2, 2, 2, 2),
    },
  },

  main: {
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },

  mainContent: {
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2),
    },

    [theme.breakpoints.up('lg')]: {
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(5, 5, 5, 5),
      boxShadow: contactPageItemShadow,
      width: '100%',
      padding: theme.spacing(2),
    },
  },

  inputs: {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridRowGap: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      gridRowGap: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateRows: '1fr',
      gridGap: theme.spacing(4),
    },
  },

  taskTypeandData: {
    display: 'grid',
    gridGap: theme.spacing(3),
    '&.MuiFormControl-fullWidth': {
      margin: theme.spacing(4, 4, 4, 4),
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      gridTemplateColumns: '1fr 1fr ',
      gridGap: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: theme.spacing(4),
      justifyContent: 'space-between',
    },
  },

  typeandData: {
    display: 'grid',
    gridGap: theme.spacing(3),
    '&.MuiFormControl-fullWidth': {
      margin: theme.spacing(4, 2, 4, 2),
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      gridTemplateColumns: '1fr 1fr ',
      gridGap: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: theme.spacing(5),
      justifyContent: 'space-between',
    },
  },

  buttonWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },

  button: {
    width: 158,
    height: 40,
    borderRadius: 8,
    boxShadow:
      '0 2px 4px 0 rgba(47, 84, 235, 0.15), 0 8px 16px 0 rgba(47, 84, 235, 0.15)',
  },

  title: {
    marginBottom: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(4, 2, 5, 2),
    },
  },
}));
