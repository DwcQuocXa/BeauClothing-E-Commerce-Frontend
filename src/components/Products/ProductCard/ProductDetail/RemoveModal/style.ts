import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export default makeStyles(() => {
  const theme = useTheme();
  return {
    root: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "20%",
      backgroundColor: "white",
      p: 4,
      padding: theme.spacing(2),
    },
    yesBtn: {
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "#565656",
      },
    },
    noBtn: {
      color: "black",
    },
  };
});
