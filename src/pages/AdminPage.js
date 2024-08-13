import React from 'react';
import Reservations from '../components/Admin/Reservations';
import Contacts from '../components/Admin/Contacts';
import Orders from '../components/Admin/Orders';
import Products from '../components/Admin/Products';
import Clients from '../components/Admin/Clients';
import './AdminPage.css';

function AdminPage() {
  return (
    <div>
      <Reservations />
      <Contacts />
      <Orders />
      <Products />
      <Clients />
    </div>
  );
}

export default AdminPage;