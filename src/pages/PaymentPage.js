import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentPage.css';

function PaymentPage() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      // Appel au backend pour obtenir le clientSecret
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1000 }), // Montant en centimes
      });
      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        console.error(error);
        alert('Erreur de paiement : ' + error.message);
      } else {
        if (paymentIntent.status === 'succeeded') {
          alert('Paiement réussi !');
        }
      }
    } catch (error) {
      console.error(error);
      alert('Erreur de paiement : ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="payment-page">
      <h2>Gestion des Paiements</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-element">Carte de Crédit</label>
          <CardElement id="card-element" />
        </div>
        <button type="submit" disabled={loading || !stripe}>
          {loading ? 'En cours...' : 'Payer'}
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;