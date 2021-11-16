import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import useStyle from "./style";
import Input from "./Input";
import Icon from "./Icon";

const Auth = () => {
  const classes = useStyle();
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setShowPass(false);
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUp ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPass ? "text" : "password"}
              handleShowPass={handleShowPass}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container className={classes.alreadyHaveAccountGrid}>
            <Grid item>
              <Button onClick={switchMode} sx={{ color: "black" }}>
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
