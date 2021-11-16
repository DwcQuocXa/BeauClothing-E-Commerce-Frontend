import React from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Grid, Typography, Button } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useAppSelector } from "../../../../hooks/useAppDispatchAndSelector";
import useStyles from "./style";
import ExpandBtn from "./ExpandBtn";

type ProductParam = {
  productId: string;
};

const ProductDetails = () => {
  const classes = useStyles();
  const products = useAppSelector((state) => state.products.productsList);
  const { productId } = useParams<ProductParam>();
  const product = products.find((product) => product._id === productId);

  return (
    <div className={classes.root}>
      {!product ? (
        <CircularProgress className={classes.loading} size={50} />
      ) : (
        <Grid container>
          <Grid item xs={4}>
            <img
              src={product?.img[0]}
              alt={product?.name}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={4}>
            <img
              src={product?.img[1]}
              alt={product?.name}
              className={classes.img}
            />
          </Grid>
          <Grid item xs={4} className={classes.detailWrapper}>
            <Typography variant="h4">{product?.name}</Typography>
            <Typography variant="h6">{product?.price} EUR</Typography>
            <br />
            <Typography variant="h6">{product?.description}</Typography>
            <br />
            <div className={classes.sizes}>
              <Typography variant="h6">Sizes</Typography>
              <ExpandBtn product={product} />
            </div>
            <br />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <ShoppingBagOutlinedIcon />
              Add
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductDetails;
