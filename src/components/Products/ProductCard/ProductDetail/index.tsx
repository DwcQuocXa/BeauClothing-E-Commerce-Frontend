import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CircularProgress, Grid, Typography, Button } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useDispatch } from "react-redux";
import BuildIcon from "@mui/icons-material/Build";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useAppSelector } from "../../../../hooks/useAppDispatchAndSelector";
import useStyles from "./style";
import ExpandBtn from "./ExpandBtn";
import { manageCartRequest } from "../../../../redux/actions";
import { API, FormikType } from "../../../../types";
import ProductForm from "../../../ProductForm";
import RemoveModal from "./RemoveModal";

type ProductParam = {
  productId: string;
};

const ProductDetails = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const products = useAppSelector((state) => state.products.productsList);
  const { productId } = useParams<ProductParam>();
  const product = products.find((product) => product._id === productId);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile") || "null");
  const history = useHistory();

  console.log(product);

  const addToCart = () => {
    dispatch(
      manageCartRequest(user?.token, user?.result?._id, productId, true)
    );
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitUpdate = async (values: FormikType) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    values.price = Number(values.price);
    values.img.push(values.img1, values.img2);
    const { img1, img2, ...rest } = values;
    await API.put(`/admin/products/${productId}`, rest, config);
    handleClose();
    window.location.reload();
  };

  const onSubmitDelete = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    await API.delete(`/admin/products/${productId}`, config);
    history.push(`/`);
    window.location.reload();
  };

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
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={addToCart}
              >
                <ShoppingBagOutlinedIcon />
                Add
              </Button>
            </Grid>
            {user?.result?.isAdmin && (
              <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={handleOpen}
                  >
                    <BuildIcon />
                    Update
                  </Button>
                </Grid>
                <ProductForm
                  open={open}
                  handleClose={handleClose}
                  onSubmit={onSubmitUpdate}
                  product={product}
                />
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={() => setRemoveModal(true)}
                  >
                    <DeleteOutlineIcon />
                    Remove
                  </Button>
                </Grid>
                <RemoveModal
                  removeModal={removeModal}
                  setRemoveModal={setRemoveModal}
                  onSubmitDelete={onSubmitDelete}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductDetails;
