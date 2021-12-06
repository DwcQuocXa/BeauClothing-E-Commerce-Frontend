import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Stack,
} from "@mui/material";

import useStyles from "./style";

type RemoveModalProps = {
  removeModal: boolean;
  setRemoveModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitDelete: () => Promise<void>;
};

function RemoveModal({
  removeModal,
  setRemoveModal,
  onSubmitDelete,
}: RemoveModalProps) {
  const handleNo = () => setRemoveModal(false);
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={removeModal}
      onClose={handleNo}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={removeModal}>
        <Box className={classes.root}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Alert
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Do you want to remove this product?
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            marginTop={5}
            spacing={2}
          >
            <Button
              variant="contained"
              className={classes.yesBtn}
              onClick={() => onSubmitDelete()}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.noBtn}
              onClick={() => handleNo()}
            >
              No
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}

export default React.memo(RemoveModal);
