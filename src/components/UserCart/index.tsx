import { Button, Container, Grid, Grow, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppDispatchAndSelector";

import { CartProduct } from "../../types";
import CartProducts from "./CartProducts";
import CheckOut from "./CheckOut";
import useStyles from "./style";

const UserCart = () => {
  const classes = useStyles();
  const cart = useAppSelector((state) => state.cart.cart);
  const history = useHistory();

  const countQuantity = (cart: CartProduct[]) => {};

  const countTotalPrice = (cart: CartProduct[]) => {};

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
              <CheckOut />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      {/* <Grid container className="cart-price-wrapper">
        <Grid item xs={4}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={() => history.goBack()}
          >
            Go back
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            TOTAL: {countTotalPrice(cart)} EUR
          </Typography>
          <Typography variant="body2" color="textSecondary">
            * Including VAT
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Continue
          </Button>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default UserCart;
