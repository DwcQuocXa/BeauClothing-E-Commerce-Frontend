import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export default makeStyles(() => {
  const theme = useTheme();
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
      width: "150%",
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
      position: "absolute",
      top: "48%",
      left: "45%",
      transform: "translate(-60%, -50%)",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: "black",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "#565656",
      },
    },
    googleButton: {
      marginBottom: theme.spacing(2),
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "#565656",
      },
    },
    alreadyAccountGrid: {
      justify: "flex-end",
    },
    alreadyAccountBtn: {
      color: "black",
    },
  };
});
