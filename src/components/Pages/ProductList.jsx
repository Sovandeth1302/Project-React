import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);  // To store the fetched products
  const [loading, setLoading] = useState(true);   // To track loading state
  const [error, setError] = useState(null);       // To store any error messages

  // Fetch products when the component mounts
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);  // Set products data to state
        setLoading(false);            // Set loading to false
      })
      .catch((err) => {
        setError(err.message);  // Set error if the request fails
        setLoading(false);      // Set loading to false
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
