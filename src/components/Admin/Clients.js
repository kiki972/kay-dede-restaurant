import React, { useState } from 'react';
import './Clients.css';

function Clients() {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const addClient = () => {
    const newClient = { id: Date.now(), name: 'Nouveau Client', email: 'newclient@example.com' };
    setClients([...clients, newClient]);
  };

  const deleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div className="clients-container">
      <h2>Clients</h2>
      <ul className="clients-list">
        {clients.map((client) => (
          <li className="client-item" key={client.id}>
            {client.name} - Email : {client.email}
            <button className="btn" onClick={() => deleteClient(client.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addClient}>Ajouter un Client</button>
    </div>
  );
}

export default Clients;