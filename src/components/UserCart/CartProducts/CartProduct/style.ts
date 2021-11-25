import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  card: {
    boxShadow: "none",
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  product: {
    display: "flex",
    justifyContent: "start",
  },
  img: {
    height: 170,
    paddingRight: 20,
  },
  quantity: {
    display: "flex",
    justifyContent: "start",
  },
  quantityNo: {
    paddingTop: 7,
    padding: "0px 20px",
    fontSize: 20,
  },
}));
