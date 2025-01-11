import {
  Button,
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProductDetailsQuery } from "./catalogApi";

export default function ProductDetail() {
  const { id } = useParams();

  const {data: product, isLoading} = useFetchProductDetailsQuery(id ? +id : 0)

  if (!product || isLoading) {
    return <h1>Loading...</h1>;
  }

  const productDetail = [
    { label: "Name", value: product?.name },
    { label: "Description", value: product?.description },
    { label: "Type", value: product?.type },
    { label: "Brand", value: product?.brand },
    { label: "Quantity in stock", value: product?.quantityInStock },
  ];

  return (
    <Grid2 container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid2 size={6}>
        <img src={product?.pictureUrl} style={{ width: "100%" }} />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product?.price / 100).toFixed(2)}
        </Typography>

        <TableContainer>
        <Table sx={{ "& td": { fontSize: "1rem" } }}>
          <TableBody>
            {productDetail.map((detail, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {detail.label}
                </TableCell>
                <TableCell>{detail.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid2 container spacing={2} marginTop={3}>
        <Grid2 size={6}>
          <TextField
            variant="outlined"
            type="number"
            label="Quantity in baske"
            fullWidth
            defaultValue={1}
          />
        </Grid2>

        <Grid2 size={6}>
          <Button sx={{height:"55px"}} color="primary" size="large" variant="contained" fullWidth>
            Add To Basket
          </Button>
        </Grid2>
      </Grid2>
      </Grid2>

      
    </Grid2>
  );
}
