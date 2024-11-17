import React, { useState } from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SuccessAlertProps {
  successMessage: string;
}

export const SuccessAlertMessage = ({ successMessage }: SuccessAlertProps) => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {successMessage}
      </Alert>
    </Collapse>
  );
};
