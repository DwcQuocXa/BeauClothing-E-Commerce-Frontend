import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export default makeStyles(() => {
  const theme = useTheme();
  return {
    modalPaper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "35%",
      backgroundColor: "white",
      p: 4,
      padding: theme.spacing(2),
    },
    title: {
      display: "flex",
      justifyContent: "center",
      fontWeight: "bold",
      paddingBottom: 30,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    textField: {
      padding: " 0px 20px",
    },
    submit: {
      margin: theme.spacing(1, 0, 2),
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "#565656",
      },
    },
  };
});
