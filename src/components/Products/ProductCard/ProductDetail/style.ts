import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    paddingTop: 80,
  },
  loading: {
    color: "black",
    position: "absolute",
    left: "55%",
    top: "40%",
  },
  img: {
    height: "auto",
    width: "100%",
  },
  detailWrapper: {
    padding: "8% 6%",
  },
  button: {
    margin: "0 auto",
    width: "100%",
    boxShadow: "none",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#565656",
    },
  },
  list: {
    margin: "10px 0px",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
  },
  sizes: {
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));
