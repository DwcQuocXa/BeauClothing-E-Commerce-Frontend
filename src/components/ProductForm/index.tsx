import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Typography,
  Paper,
  TextField,
  RadioGroup,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import useStyles from "./style";
import { createProduct } from "../../redux/api/Product";

type ProductFormProps = {
  open: boolean;
  handleClose: () => void;
};

const ProductForm = ({ open, handleClose }: ProductFormProps) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile") || "null");

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      categories: "",
      sizes: ["XS", "S", "M", "L", "XL"],
      img: ["fsdafads"],
      price: 0,
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().min(2, "Too short").max(50, "Too long"),
    //   description: Yup.string().min(2, "Too short").max(500, "Too long"),
    //   categories: Yup.string().min(2, "Too short").max(50, "Too long"),
    //   img: Yup.string().min(2, "Too short"),
    //   price: Yup.number().min(1, "Too small").max(99999999, "Too big"),
    // }),
    onSubmit: async (values) => {
      console.log("formik", values);
      let res = await axios.post(
        `http://localhost:5000/api/v1/admin/products`,
        values,
        config
      );
      console.log(config);
      console.log(res.data);
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper className={classes.modalPaper}>
          <Typography variant="h4" className={classes.title}>
            Creat a product
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  label="Name"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  label="Description"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="img"
                  name="img"
                  onChange={formik.handleChange}
                  label="ImageURL"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Categories
                  </InputLabel>
                  <Select
                    id="categories"
                    name="categories"
                    labelId="demo-simple-select-label"
                    value={formik.values.categories}
                    label="Categories"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={"Jackets"}>Jackets</MenuItem>
                    <MenuItem value={"T-Shirts"}>T-Shirts</MenuItem>
                    <MenuItem value={"Pants"}>Pants</MenuItem>
                    <MenuItem value={"Shoes"}>Shoes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="price"
                  name="price"
                  onChange={formik.handleChange}
                  label="Price"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Modal>
    </div>
  );
};

export default ProductForm;
