import { makeStyles } from '@material-ui/core';

export const useStylesButton = makeStyles((theme) => ({
  button: {
    '&.MuiButton-containedPrimary': {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1, 2),
    },
  },
}));
