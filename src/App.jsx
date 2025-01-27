import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ReviewForm from './ReviewForm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://65e60da8d7f0758a76e8083a.mockapi.io/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleReviewSubmit = (updatedProducts) => {
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
        <div className={`${selectedProductId ? 'selected-box' : ''}`}>
          <ProductList products={products} selectedProductId={selectedProductId} onProductSelect={setSelectedProductId} />
          {selectedProductId && <ReviewForm products={products} selectedProductId={selectedProductId} onSubmit={handleReviewSubmit} setSelectedProductId={setSelectedProductId} />}
      </div>
    </div>
  );
}

export default App;