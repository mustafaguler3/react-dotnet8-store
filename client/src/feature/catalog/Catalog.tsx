import React from "react";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";


export default function Catalog() {
  const {data, isLoading} = useFetchProductsQuery()

  if(!data || isLoading) return <h1>Loading...</h1>
  return (
    <>
      <ProductList products={data} />
    </>
  );
}
