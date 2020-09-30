import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { Box } from '@material-ui/core';

import Form from '../components/Form/Form';
import { useStylesMainView } from './MainViewStyles';
import Matrix from '../components/Matrix/Matrix';
import { Button } from '../components/Button/Button';

const App = () => {
  const classes = useStylesMainView();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="inline-block" className={classes.container}>
      <Matrix />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Form onClick={handleClose} />
      </Modal>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
      >
        Add new task
      </Button>
    </Box>
  );
};

export default App;
