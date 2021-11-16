import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../../types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [productImg, setProductImg] = useState(product.img[1]);

  return (
    <Card>
      <CardActionArea component={Link} to={`/products/${product._id}`}>
        <CardMedia
          component="img"
          onMouseEnter={() => setProductImg(product.img[0])}
          onMouseOut={() => setProductImg(product.img[1])}
          src={productImg}
          title={product.name}
          sx={{ height: 450 }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            sx={{
              fontSize: 13,
              //fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {product.name.toLowerCase()}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            £{product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
