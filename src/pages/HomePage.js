import React from 'react';
import AdminPage from './AdminPage';
import PaymentPage from './PaymentPage';
import ProductsPage from './ProductsPage';
import ReservationPage from './ReservationPage';
import './HomePage.css'; // Ajoutez le fichier CSS pour HomePage

function HomePage() {
  return (
    <div className="home-page">
      <h1>Bienvenue sur le site du Restaurant Kay Dédé</h1>
      <div className="page-section">
        <h2>Administration</h2>
        <AdminPage />
      </div>
      <div className="page-section">
        <h2>Réservations</h2>
        <ReservationPage />
      </div>
      <div className="page-section">
        <h2>Produits</h2>
        <ProductsPage />
      </div>
      <div className="page-section">
        <h2>Paiements</h2>
        <PaymentPage />
      </div>
    </div>
  );
}

export default HomePage;