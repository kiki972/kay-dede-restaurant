import React, { useState } from 'react';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, item: 'Pizza Margherita', quantity: 2 },
    { id: 2, item: 'Spaghetti Carbonara', quantity: 1 },
  ]);

  const addOrder = () => {
    const newOrder = { id: Date.now(), item: 'Nouveau Plat', quantity: 1 };
    setOrders([...orders, newOrder]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="orders-container">
      <h2>Commandes</h2>
      <ul className="orders-list">
        {orders.map((order) => (
          <li className="order-item" key={order.id}>
            {order.item} - Quantité : {order.quantity}
            <button className="btn" onClick={() => deleteOrder(order.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addOrder}>Ajouter une Commande</button>
    </div>
  );
}

export default Orders;