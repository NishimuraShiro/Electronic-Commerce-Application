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
  error: boolean;
  helperText: string;
}

export const LabeledPasswordField: React.FC<LabeledPasswordFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  helperText
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
        error={error}
        helperText={helperText}
      />
    </div>
  );
};
