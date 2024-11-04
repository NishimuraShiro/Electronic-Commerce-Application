"use client";
import React, { useState, useRef } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText
} from "@mui/material";

type Props = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
};

export const PasswordField = ({
  name,
  value,
  onChange,
  error,
  helperText
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
    if (inputRef.current) {
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <FormControl sx={{ width: "288px" }} variant="outlined" error={error}>
      <InputLabel htmlFor={name}>Password</InputLabel>
      <OutlinedInput
        id={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder="6字以上16字以下の半角入力"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
        name={name}
        inputRef={inputRef}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
