import { Card, CardContent, Typography, IconButton } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { CartProduct } from "../../../../types";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import {
  manageCartRequest,
  deleteCartRequest,
} from "../../../../redux/actions";

type CartProductProps = {
  product: CartProduct;
};

const CartProductDetail = ({ product }: CartProductProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile") || "null");

  const handleDecreaseQuantity = () => {
    if (product?.quantity > 1)
      dispatch(
        manageCartRequest(
          user?.token,
          user?.result?._id,
          product?.product?._id,
          false
        )
      );
  };

  const handleInCreaseQuantity = () => {
    dispatch(
      manageCartRequest(
        user?.token,
        user?.result?._id,
        product?.product?._id,
        true
      )
    );
  };

  const handleDeleteProduct = () => {
    dispatch(
      deleteCartRequest(user?.token, user?.result?._id, product?.product?._id)
    );
  };

  let totalPrice = product?.product?.price * product?.quantity;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.root}>
        <div className={classes.product}>
          <img
            src={`${product?.product?.img[0]}`}
            alt={`${product?.product?.name}`}
            className={classes.img}
          />
          <div>
            <Typography sx={{ fontSize: 15 }} gutterBottom>
              {product?.product?.name}
            </Typography>
            <Typography sx={{ fontSize: 15 }} gutterBottom>
              £{product?.product?.price}
            </Typography>
            <Typography sx={{ fontSize: 15 }} gutterBottom>
              Size: M
            </Typography>
            <Typography sx={{ fontSize: 15, fontWeight: "bold" }} gutterBottom>
              Total: £{totalPrice}
            </Typography>
            <div className={classes.quantity}>
              <IconButton
                sx={{ color: "black" }}
                onClick={handleDecreaseQuantity}
              >
                <RemoveIcon />
              </IconButton>
              <Typography className={classes.quantityNo} gutterBottom>
                {product?.quantity}
              </Typography>
              <IconButton
                sx={{ color: "black" }}
                onClick={handleInCreaseQuantity}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div>
          <IconButton sx={{ color: "black" }} onClick={handleDeleteProduct}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartProductDetail;
