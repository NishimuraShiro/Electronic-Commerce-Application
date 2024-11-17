import React from "react";
import { TextField, Typography } from "@mui/material";
import { RequiredMark } from "./RequiredMark";
import { OptionalMark } from "./OptionalMark";
import { formFieldStyles } from "@/utils/style";

interface LabeledTextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  errorStatus: boolean;
  errorMessageDisplayedBelowInput: string;
}

export const LabeledTextField: React.FC<LabeledTextFieldProps> = ({
  label,
  value,
  onChange,
  required,
  errorStatus,
  errorMessageDisplayedBelowInput
}) => (
  <div className="mt-12">
    <div className="flex items-center">
      <Typography variant="h6" sx={formFieldStyles}>
        {label}
      </Typography>
      {required ? <RequiredMark /> : <OptionalMark />}
    </div>
    <TextField
      value={value}
      onChange={onChange}
      sx={{ width: "288px" }}
      variant="outlined"
      error={errorStatus}
      helperText={errorMessageDisplayedBelowInput}
    />
  </div>
);
