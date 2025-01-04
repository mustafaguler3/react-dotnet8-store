import { useState } from 'react'
import './App.css'
import Catalog from '../feature/catalog/Catalog'
import { Product } from '../models/Product'
import { Typography } from '@mui/material'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <>
      <Typography variant='h1'>E-Store</Typography>
      <Catalog products={products} addProduct={setProducts}/>
    </>
  )
}

export default App
