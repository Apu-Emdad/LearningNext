import React from 'react';

const Product = ({ params }) => {
  console.log('params', params)
  return (
    <div>
      <h3>Product ID: {params.slug}</h3>
    </div>
  );
};

export default Product;