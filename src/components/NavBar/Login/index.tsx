import React, { useEffect, useState } from "react";

import { Toolbar, Typography, Avatar, Button, IconButton } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import useStyles from "./style";
import { fetchCartRequest, logOut } from "../../../redux/actions";

export default function LogIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem("profile") || "null")
  );

  const logout = () => {
    dispatch(logOut());
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: any = decode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile") || "null"));
    dispatch(fetchCartRequest(token, user?.result?._id));
  }, [location]);

  console.log("login", user);
  return (
    <Toolbar>
      {user ? (
        <div className={classes.profile}>
          <Typography className={classes.userName} variant="h6">
            Hi, {user?.result?.firstName} {user?.result?.lastName}
          </Typography>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <IconButton sx={{ color: "black" }}>
              <LocalMallOutlinedIcon />
            </IconButton>
          </Link>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ color: "black" }}
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        location.pathname !== "/auth" && (
          <Link to="/auth" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "black" }}
              startIcon={<AccountBoxOutlinedIcon />}
            >
              Sign In
            </Button>
          </Link>
        )
      )}
    </Toolbar>
  );
}
