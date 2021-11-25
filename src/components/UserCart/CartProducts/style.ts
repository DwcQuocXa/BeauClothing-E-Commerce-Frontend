import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 100,
    height: "100%",
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    minWidth: "176px",
    maxWidth: "232px",
    minHeight: "45px",
    maxWeight: "60px",
    boxShadow: "none",
  },
}));
