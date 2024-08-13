import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';

const stripePromise = loadStripe('pk_test_51PnKSWFnP4lSW6dphsx3tuRDlWhBirXNH4JR2hLsCuUf21tPG6Pm54tDrK6mtEp9yQsbvvef4UWzV2s4ywZOWlso00czqmgE1o');

function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Elements>
    </Router>
  );
}

export default App;