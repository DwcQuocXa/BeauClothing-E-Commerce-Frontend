import { makeStyles } from "@mui/styles";
import { deepPurple } from "@mui/material/colors";

export default makeStyles(() => ({
  profile: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    //color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  adminBtn: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
