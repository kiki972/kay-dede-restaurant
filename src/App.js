import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentPage from './pages/PaymentPage';

// Utilisez votre clé publique Stripe
const stripePromise = loadStripe('pk_test_51PnKSWFnP4lSW6dphsx3tuRDlWhBirXNH4JR2hLsCuUf21tPG6Pm54tDrK6mtEp9yQsbvvef4UWzV2s4ywZOWlso00czqmgE1o');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentPage />
    </Elements>
  );
}

export default App;
