import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 30,
    height: "100%",
    width: "100%",
  },
  upper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  loading: {
    color: "black",
    position: "absolute",
    left: "55%",
    top: "40%",
  },
}));
