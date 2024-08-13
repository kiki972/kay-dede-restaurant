import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Pizza Margherita', price: 8.99 },
    { id: 2, name: 'Spaghetti Carbonara', price: 12.99 },
  ]);

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: 'Nouveau Produit', price: 9.99 };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="products-container">
      <h2>Produits</h2>
      <ul className="products-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            {product.name} - Prix : ${product.price}
            <button className="btn" onClick={() => deleteProduct(product.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addProduct}>Ajouter un Produit</button>
    </div>
  );
}

export default Products;