import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Modal,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";

import useStyles from "./style";
import { FormikType, Product } from "../../types";

type ProductFormProps = {
  open: boolean;
  handleClose: () => void;
  onSubmit: (values: FormikType) => Promise<void>;
  product?: Product;
};

const ProductForm = ({
  open,
  handleClose,
  onSubmit,
  product,
}: ProductFormProps) => {
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    categories: "",
    sizes: ["XS", "S", "M", "L", "XL"],
    img: [],
    img1: "",
    img2: "",
    price: 0,
  });

  // console.log(product);

  useEffect(() => {
    if (product)
      setInitialValues({
        name: product.name,
        description: product.description,
        categories: product.categories,
        sizes: ["XS", "S", "M", "L", "XL"],
        img: [],
        img1: product.img[0],
        img2: product.img[1],
        price: product.price,
      });
  }, [product]);

  console.log(initialValues);

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
            Product
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
                        value={values.name}
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
                        value={values.description}
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
                        value={values.img1}
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
                        value={values.img2}
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
                        value={values.price}
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
