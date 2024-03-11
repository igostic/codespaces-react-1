import React from 'react';

const ProductList = ({ products, selectedProductId, onProductSelect }) => {
  //image url will be like https://rukminim1.flixcart.com/image/%7B@width%7D/%7B@height%7D/xif0q/mobile/w/z/u/-original-imagtxvtmxpagdpn.jpeg?q={@quality}&crop=false
  //replace @width with const defaultWidth
  //replace @height with defaultHeight
  //replace {@quality} with 90
  const defaultWidth = 300;
  const defaultHeight = 600;
  const quality = 90;
  const regex = /({@width})|({@height})|({@quality})/g;
  const replaceUrl = (url) => url.replace(regex, (match) => {
    if (match === '{@width}') return defaultWidth;
    if (match === '{@height}') return defaultHeight;
    if (match === '{@quality}') return quality;
  });

  return (
    <div className="product-list">
      <h2>Your Purchased Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.title}>
            <img src={replaceUrl(product.image)} alt={product.title} />
            <div 
            onClick={() => onProductSelect(product.title)} 
            className={product.title === selectedProductId ? 'active' : ''}
            >
              <h3>{product.title}</h3>
              <p>RAM: {product.ram} GB</p>
              <p>ROM: {product.rom} GB</p>
              <p>Display: {product.display}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
