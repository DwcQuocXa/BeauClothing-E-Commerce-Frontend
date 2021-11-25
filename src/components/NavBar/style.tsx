import { makeStyles } from "@mui/styles";
import { Theme, alpha } from "@mui/material/styles";
import Color from "color";

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: alpha("rgb(255, 255, 255)", 0),
  },
  empty: {},
  toolBar: {
    background: "white",
    color: "black",
    height: 80,
  },
  toolBarTransparent: {
    color: "black",
    height: 80,
  },
  logoBlack: {
    textDecoration: "none",
    color: "black",
    flexGrow: 1,
    fontWeight: 600,
    fontFamily: "Lucida Console",
    fontSize: 60,
  },
  logoWhite: {
    textDecoration: "none",
    color: "white",
    flexGrow: 1,
    fontWeight: 600,
    fontFamily: "Lucida Console",
    fontSize: 60,
  },
}));
