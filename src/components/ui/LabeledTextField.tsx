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
  error: boolean | undefined;
  helperText: string;
}

export const LabeledTextField: React.FC<LabeledTextFieldProps> = ({
  label,
  value,
  onChange,
  required,
  error,
  helperText
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
      error={error}
      helperText={helperText}
    />
  </div>
);
