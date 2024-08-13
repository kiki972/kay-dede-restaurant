import React, { useState } from 'react';
import './Reservations.css';

function Reservations() {
  const [reservations, setReservations] = useState([
    { id: 1, name: 'John Doe', date: '2024-08-15', time: '19:00' },
    { id: 2, name: 'Jane Smith', date: '2024-08-16', time: '20:00' },
  ]);

  const addReservation = () => {
    const newReservation = { id: Date.now(), name: 'New Client', date: '2024-08-17', time: '18:30' };
    setReservations([...reservations, newReservation]);
  };

  const deleteReservation = (id) => {
    setReservations(reservations.filter((reservation) => reservation.id !== id));
  };

  return (
    <div className="reservations-container">
      <h2>Réservations</h2>
      <ul className="reservations-list">
        {reservations.map((reservation) => (
          <li className="reservation-item" key={reservation.id}>
            {reservation.name} - {reservation.date} à {reservation.time}
            <button className="btn" onClick={() => deleteReservation(reservation.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addReservation}>Ajouter une Réservation</button>
    </div>
  );
}

export default Reservations;