"use client";

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="search-input">
        <input type="text" placeholder="Search products..." onChange={handleSearch} />
      </div>
      <div className="product-grid">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;