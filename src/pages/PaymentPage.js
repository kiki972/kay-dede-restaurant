// src/pages/PaymentPage.js

import React, { useState, useEffect } from 'react';
import './PaymentPage.css';

function PaymentPage() {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({ id: '', amount: '', description: '' });
  const [editPayment, setEditPayment] = useState(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const response = await fetch('http://localhost:5000/payments');
    const data = await response.json();
    setPayments(data);
  };

  const handleCreatePayment = async () => {
    const response = await fetch('http://localhost:5000/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPayment),
    });
    const data = await response.json();
    setPayments([...payments, data]);
    setNewPayment({ id: '', amount: '', description: '' });
  };

  const handleUpdatePayment = async () => {
    const response = await fetch(`http://localhost:5000/payments/${editPayment.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editPayment),
    });
    const data = await response.json();
    setPayments(payments.map(p => p.id === data.id ? data : p));
    setEditPayment(null);
  };

  const handleDeletePayment = async (id) => {
    await fetch(`http://localhost:5000/payments/${id}`, {
      method: 'DELETE',
    });
    setPayments(payments.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Gestion des Paiements</h2>
      
      <div>
        <h3>Ajouter un Paiement</h3>
        <input
          type="text"
          placeholder="ID"
          value={newPayment.id}
          onChange={(e) => setNewPayment({ ...newPayment, id: e.target.value })}
        />
        <input
          type="number"
          placeholder="Montant"
          value={newPayment.amount}
          onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newPayment.description}
          onChange={(e) => setNewPayment({ ...newPayment, description: e.target.value })}
        />
        <button onClick={handleCreatePayment}>Ajouter</button>
      </div>
      
      <div>
        <h3>Modifier un Paiement</h3>
        {editPayment && (
          <>
            <input
              type="text"
              value={editPayment.id}
              readOnly
            />
            <input
              type="number"
              value={editPayment.amount}
              onChange={(e) => setEditPayment({ ...editPayment, amount: e.target.value })}
            />
            <input
              type="text"
              value={editPayment.description}
              onChange={(e) => setEditPayment({ ...editPayment, description: e.target.value })}
            />
            <button onClick={handleUpdatePayment}>Mettre à jour</button>
          </>
        )}
      </div>

      <div>
        <h3>Liste des Paiements</h3>
        <ul>
          {payments.map(payment => (
            <li key={payment.id}>
              <span>{payment.id}: {payment.amount} - {payment.description}</span>
              <button onClick={() => setEditPayment(payment)}>Modifier</button>
              <button onClick={() => handleDeletePayment(payment.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentPage;