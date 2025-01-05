import React from "react";
import { Product } from "../../models/Product";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Box sx={{ display: "flex" ,flexWrap: "wrap",gap: 3}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}
