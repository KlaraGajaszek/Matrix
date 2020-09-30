import React from 'react';
import { Box, BoxProps, Typography } from '@material-ui/core';

import { useStylesSectionTitle } from './SectionTitleStyles';

type SectionTitleProps = BoxProps;

export const SectionTitle = (props: SectionTitleProps) => {
  const classes = useStylesSectionTitle();
  return (
    <Typography variant="h5">
      <Box className={classes.sectionTitle} {...props}>
        {props.children}
        <div className={classes.divider} />
      </Box>
    </Typography>
  );
};
