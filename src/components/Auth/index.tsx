import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyle from "./style";
import Input from "./Input";
import Icon from "./Icon";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { API, baseURL, FormData } from "../../types";
import { sendSignUpRequest, sendSignInRequest } from "../../redux/actions/auth";
import axios from "axios";

const Auth = () => {
  const classes = useStyle();
  const initialState: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(formData);
    if (isSignUp) {
      dispatch(sendSignUpRequest(formData, history));
    } else {
      dispatch(sendSignInRequest(formData, history));
    }
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setShowPass(false);
  };

  const googleSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline | any
  ) => {
    const profile = (response as GoogleLoginResponse)?.profileObj;
    const result = { ...profile, _id: profile?.googleId };
    const token = (response as any)?.tokenId;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await API.post(`/auth/google-authenticate`, { result, token }, config);

      let res = await API.get(`/auth/google-authenticate/${result?.email}`);
      console.log("res.data", res);

      dispatch({
        type: "SIGN_IN",
        payload: { data: { result: res.data, token } },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try Again Later!!");
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
          <GoogleLogin
            clientId="634958478111-32garfk7ttd62rvjpp3tqmp0f58ijdsn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container className={classes.alreadyAccountGrid}>
            <Grid item>
              <Button
                onClick={switchMode}
                className={classes.alreadyAccountBtn}
              >
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
