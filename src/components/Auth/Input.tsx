import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type UserInputProps = {
  half?: boolean;
  name?: string;
  handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  label?: string;
  autoFocus?: boolean | undefined;
  type?: string;
  handleShowPass?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Input = ({
  half,
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPass,
}: UserInputProps) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPass}>
                      {type === "password" ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </Grid>
  );
};

export default Input;
