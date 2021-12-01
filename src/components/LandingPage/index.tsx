import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import useStyles from "./style";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.newCollection}>
        <Typography variant="h1" className={classes.title}>
          NEW COLLECTION
        </Typography>
      </div>
      <div className={classes.introduction}>
        <Typography variant="h4" className={classes.introductionText}>
          Elevated, organic cotton basics.
        </Typography>
        <Typography variant="h4" className={classes.introductionText}>
          Impeccable fit. Compromise-free.
        </Typography>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Button className={classes.shopAllBtn} endIcon={<ArrowForwardIcon />}>
            SHOP ALL
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
