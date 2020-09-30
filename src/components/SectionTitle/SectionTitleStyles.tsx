import { makeStyles } from '@material-ui/core';

export const useStylesSectionTitle = makeStyles((theme) => ({
  sectionTitle: {
    color: theme.palette.text.primary,
  },
  divider: {
    height: 2,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    background: `linear-gradient(left, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 64px, ${theme.palette.divider} 64px, ${theme.palette.divider} 100%)`,
  },
}));
