import React from "react";
import { Product } from "../../models/Product";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <>
      <Card elevation={3}
      sx={{
        width:250,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <CardMedia
          sx={{ height: 250, backgroundSize: "cover" }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="secondary"
            sx={{ textTransform: "uppercase" }}
          >
            {product.name}
          </Typography>

          <Typography gutterBottom variant="h5" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:"space-between"}}>
          <Button size="small">Add To Card</Button>
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </>
  );
}
