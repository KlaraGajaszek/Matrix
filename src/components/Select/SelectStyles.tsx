import { makeStyles } from '@material-ui/core';

export const useStylesSeceltField = makeStyles((theme) => ({
  textField: {
    '& .MuiFilledInput-underline:before': {
      content: 'none',
      borderRadius: 18,
    },
    '& .MuiSelect-outlined': {
      backgroundColor: theme.palette.background.field,
    },
    '& .MuiFilledInput-root': {
      borderRadius: 8,
      backgroundColor: theme.palette.background.field,
    },
    '& .MuiFilledInput-underline:after': { borderBottom: 'none' },
  },
}));
