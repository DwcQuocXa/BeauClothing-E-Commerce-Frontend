import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  paper: {
    boxShadow: "none",
    backgroundColor: "#fbf9f8",
  },
  root: {
    paddingTop: 100,
    height: "100%",
    width: "100%",
  },
  inside: {
    padding: "10px 20px",
  },
  linePrice: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0px",
  },
  applyDiscountBtn: {
    background: "none",
    border: "none",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
  button: {
    padding: "12px",
    margin: "0 auto",
    width: "100%",
    boxShadow: "none",
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#565656",
    },
  },
  text: {
    fontSize: 15,
  },
  instructionText: {
    paddingTop: 15,
    fontSize: 12,
    opacity: 0.6,
  },
  img: {
    height: 20,
    paddingRight: 20,
  },
}));
