import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import { useAppSelector } from "../../hooks/useAppDispatchAndSelector";
import BackToTop from "../BackToTop";
import ProductCard from "./ProductCard";
import Search from "./Search";
import useStyles from "./style";

const Products = () => {
  const classes = useStyles();
  const products = useAppSelector((state) => state.products.productsList);
  const searchTerm = useAppSelector((state) => state.products.searchTerm);
  const category = useAppSelector((state) => state.category.category);

  return (
    <div className={classes.root}>
      <BackToTop />
      <Box className={classes.upper}>
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            fontFamily: "Lucida Console",
            textTransform: "uppercase",
          }}
        >
          {category}
        </Typography>
        <Search />
      </Box>
      {!products.length ? (
        <CircularProgress className={classes.loading} size={50} />
      ) : (
        <Grid container spacing={3}>
          {products
            .filter(
              (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (product.categories === category || category === "View All")
            )
            .map((product) => (
              <Grid key={product._id} item xs={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
