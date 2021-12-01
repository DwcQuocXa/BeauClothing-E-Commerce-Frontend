import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 100,
    height: "100%",
    width: "100%",
  },
  listTable: {
    height: 500,
    width: "70%",
    margin: "auto",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    paddingBottom: 30,
  },
}));
