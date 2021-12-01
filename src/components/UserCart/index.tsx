import { Container, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks/useAppDispatchAndSelector";

import CartProducts from "./CartProducts";
import CheckOut from "./CheckOut";
import useStyles from "./style";

const UserCart = () => {
  const classes = useStyles();
  const cart = useAppSelector((state) => state.cart.cart);

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Shopping bag
      </Typography>
      <Grow in>
        <Container>
          <Grid container className={classes.grid} spacing={3}>
            <Grid item xs={12} sm={8}>
              <CartProducts cart={cart} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckOut cart={cart} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default UserCart;
