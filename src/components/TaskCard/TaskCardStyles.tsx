import { makeStyles } from '@material-ui/core/styles';

export const useStylesTaskCard = makeStyles(
  ({ spacing, typography, palette, breakpoints }) => ({
    root: {
      width: '90%',
      margin: '5px 0 5px 0',
      borderRadius: '10px',
      overflow: 'visible',
      [breakpoints.down('sm')]: {
        width: '80%',
        margin: '5px 0 5px 0',
      },
    },
    media: {
      height: 2,
      position: 'relative',
    },
    content: {
      padding: spacing(1),
      marginTop: '2px',
    },
    title: {
      margin: 0,
    },
    text: {
      paddingTop: spacing(0),
    },
    closeButton: {
      position: 'absolute',
      right: spacing(1),
      top: spacing(0.1),
      color: palette.primary.main,
    },
    tagAndData: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);
