import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 100,
    height: "100%",
    width: "100%",
    //paddingLeft: 200,
  },
  grid: {
    justify: "space-between",
    alignItems: "stretch",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    paddingBottom: 30,
  },
  button: {
    minWidth: "176px",
    maxWidth: "232px",
    minHeight: "45px",
    maxWeight: "60px",
    boxShadow: "none",
  },
}));
