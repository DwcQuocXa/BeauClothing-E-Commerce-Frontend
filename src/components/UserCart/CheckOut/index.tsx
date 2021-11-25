import { Paper, Typography, Divider, Button } from "@mui/material";
import React from "react";
import { CartProduct } from "../../../types";

import useStyles from "./style";

type CheckOutProps = {
  cart: CartProduct[];
};

const CheckOut = ({ cart }: CheckOutProps) => {
  const classes = useStyles();

  let sum = cart
    .map((product) => product.quantity * product.product.price)
    .reduce((a, b) => a + b, 0);

  let totalPrice = (sum + 3.99).toFixed(2);

  return (
    <div>
      <Paper className={classes.paper}>
        <div className={classes.inside}>
          <div className={classes.linePrice}>
            <Typography variant="h6" className={classes.text}>
              Discount
            </Typography>
            <button className={classes.applyDiscountBtn}>
              <Typography
                variant="h6"
                className={classes.text}
                sx={{ textDecoration: "underline" }}
              >
                APPLY DISCOUNT
              </Typography>
            </button>
          </div>
          <Divider />
          <div className={classes.linePrice}>
            <Typography variant="h6" className={classes.text}>
              Order value
            </Typography>
            <Typography variant="h6" className={classes.text}>
              £{sum.toFixed(2)}
            </Typography>
          </div>
          <div className={classes.linePrice}>
            <Typography variant="h6" className={classes.text}>
              Delivery
            </Typography>
            <Typography variant="h6" className={classes.text}>
              £3.99
            </Typography>
          </div>
          <Divider />
          <div className={classes.linePrice}>
            <Typography
              variant="h5"
              className={classes.text}
              sx={{ fontWeight: "bold" }}
            >
              Total
            </Typography>
            <Typography
              variant="h5"
              className={classes.text}
              sx={{ fontWeight: "bold" }}
            >
              £{totalPrice}
            </Typography>
          </div>
          <div className={classes.linePrice}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              CONTINUE TO CHECKOUT
            </Button>
          </div>
          <div>
            <Typography variant="h6" className={classes.text}>
              We accept
            </Typography>
            <div style={{ paddingTop: 15 }}>
              <img
                src={`https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png`}
                alt="mastercard"
                className={classes.img}
              />
              <img
                src={`https://www.bullsportsdirect.com/wp-content/uploads/2019/05/Visa-Logo-design-Vector-Download-300x190.png`}
                alt="visa1"
                className={classes.img}
              />
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png`}
                alt="visa2"
                className={classes.img}
              />
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png`}
                alt="paypal"
                className={classes.img}
              />
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png`}
                alt="paypal"
                className={classes.img}
              />
            </div>
            <div>
              <Typography variant="h5" className={classes.instructionText}>
                Prices and delivery costs are not confirmed until you've reached
                the checkout.
              </Typography>
              <Typography variant="h5" className={classes.instructionText}>
                28 days withdrawal and free returns. Read more about return and
                refund policy.
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default CheckOut;
