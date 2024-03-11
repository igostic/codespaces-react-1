import React from 'react';

const ProductList = ({ products, selectedProductId, onProductSelect }) => {
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
      <div>
        {products.map((product) => (
          <div key={product.title} className='product-description'>
            <img src={replaceUrl(product.image)} alt={product.title} />
            <div 
            onClick={() => onProductSelect(product.title)} 
            className={`${product.title === selectedProductId ? 'active' : ''} product-box`}
            >
              <h3>{product.title}</h3>
              <div className='specifications'>
                <span>RAM: {product.ram}GB</span>
                <p className='separator'></p>
                <small>ROM: {product.rom}GB</small>
                <p className='rating-text'><span className='rating'>{product.rating}</span></p>
                <p>Price: ₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;