import { makeStyles } from '@material-ui/core';

export const useStylesTag = makeStyles((theme) => ({
  MuiChip: {
    marginTop: '5px',
    marginLeft: '10px',
    ...theme.typography.subtitle2,
    backgroundColor: theme.palette.background.tag,
    borderRadius: '4px',
    height: '18px',
    color: theme.palette.text.white,
    '&.MuiChip-colorSecondary': {
      backgroundColor: theme.palette.success.main,
    },
    '&.MuiChip-colorPrimary': {
      backgroundColor: theme.palette.text.secondary,
    },
  },
}));
