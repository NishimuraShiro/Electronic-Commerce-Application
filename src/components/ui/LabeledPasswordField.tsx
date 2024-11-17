import React, { ChangeEvent } from "react";
import { PasswordField } from "@/components/ui/PasswordField";
import { RequiredMark } from "@/components/ui/RequiredMark";
import { Typography } from "@mui/material";
import { formFieldStyles } from "@/utils/style";

interface LabeledPasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorStatus: boolean;
  errorMessageDisplayedBelowInput: string;
}

export const LabeledPasswordField: React.FC<LabeledPasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
  errorStatus,
  errorMessageDisplayedBelowInput
}) => {
  return (
    <div className="mt-12">
      <div className="flex items-center">
        <Typography variant="h6" sx={formFieldStyles}>
          {label}
        </Typography>
        <RequiredMark />
      </div>
      <PasswordField
        name={name}
        value={value}
        onChange={onChange}
        error={errorStatus}
        helperText={errorMessageDisplayedBelowInput}
      />
    </div>
  );
};
