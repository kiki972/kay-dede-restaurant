import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  // fetch the product details using id
  
  return (
    <div>
      <h1>Détails du Produit {id}</h1>
      {/* Display product details here */}
    </div>
  );
}

export default ProductDetail;