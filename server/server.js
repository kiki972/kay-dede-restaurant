// server/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let payments = []; // Simuler une base de données en mémoire

// Endpoint pour créer un paiement
app.post('/payments', (req, res) => {
  const { id, amount, description } = req.body;
  const newPayment = { id, amount, description };
  payments.push(newPayment);
  res.status(201).send(newPayment);
});

// Endpoint pour lire tous les paiements
app.get('/payments', (req, res) => {
  res.send(payments);
});

// Endpoint pour mettre à jour un paiement
app.put('/payments/:id', (req, res) => {
  const { id } = req.params;
  const { amount, description } = req.body;
  const payment = payments.find(p => p.id === id);
  if (payment) {
    payment.amount = amount;
    payment.description = description;
    res.send(payment);
  } else {
    res.status(404).send({ error: 'Payment not found' });
  }
});

// Endpoint pour supprimer un paiement
app.delete('/payments/:id', (req, res) => {
  const { id } = req.params;
  payments = payments.filter(p => p.id !== id);
  res.status(204).send();
});

app.listen(5000, () => console.log('Server running on port 5000'));