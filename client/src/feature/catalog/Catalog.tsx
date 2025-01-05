import React, { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import ProductList from "./ProductList";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
