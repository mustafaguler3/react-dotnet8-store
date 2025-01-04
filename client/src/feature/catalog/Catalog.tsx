
import React from 'react'
import { Product } from '../../models/Product'

interface Props {
    products: Product[],
    addProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function Catalog({products,addProduct}: Props) {
  return (
    <div>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name}
                </li>
            ))}
        </ul>
        <button onClick={() => addProduct}>Add</button>
    </div>
  )
}
