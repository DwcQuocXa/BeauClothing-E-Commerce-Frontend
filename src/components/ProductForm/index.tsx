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
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import useStyles from "./style";
import { createProduct } from "../../redux/api/Product";
import { API } from "../../types";

type ProductFormProps = {
  open: boolean;
  handleClose: () => void;
};

type FormikType = {
  name: string;
  description: string;
  categories: string;
  sizes: string[];
  price: number;
  img: string[];
  img1: string;
  img2: string;
};

const ProductForm = ({ open, handleClose }: ProductFormProps) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile") || "null");

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  const initialValues = {
    name: "",
    description: "",
    categories: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    img: [],
    img1: "",
    img2: "",
    price: 0,
  };

  const onSubmit = async (values: FormikType) => {
    console.log("formik", values);
    values.price = Number(values.price);
    values.img.push(values.img1, values.img2);
    const { img1, img2, ...rest } = values;

    console.log("valuesToSend", rest);
    let res = await API.post(`/admin/products`, rest, config);
    console.log(config);
    console.log(res.data);
  };

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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            //validationSchema={yupSchema}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              return (
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="name"
                        name="name"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        label="Description"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="img1"
                        name="img1"
                        onChange={handleChange}
                        label="ImageURL1"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="img2"
                        name="img2"
                        onChange={handleChange}
                        label="ImageURL2"
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
                          value={values.categories}
                          label="Categories"
                          onChange={handleChange}
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
                        onChange={handleChange}
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
              );
            }}
          </Formik>
        </Paper>
      </Modal>
    </div>
  );
};

export default ProductForm;
