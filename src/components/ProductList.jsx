import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, onRemove }) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </section>
  )
}

export default ProductList