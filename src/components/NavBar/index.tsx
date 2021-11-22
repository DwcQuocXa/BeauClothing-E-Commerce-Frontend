import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./style";
import LogIn from "./Login";

export default function NavBar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "none",
      }}
      className={classes[location.pathname === "/" ? "root" : "empty"]}
    >
      <Toolbar
        className={
          classes[location.pathname === "/" ? "toolBarTransparent" : "toolBar"]
        }
      >
        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
            fontWeight: 600,
            fontFamily: "Lucida Console",
            fontSize: 60,
          }}
        >
          BEAU
        </Link>
        <LogIn />
      </Toolbar>
    </AppBar>
  );
}
