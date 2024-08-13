import React, { useState } from 'react';
import './Contacts.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const addContact = () => {
    const newContact = { id: Date.now(), name: 'New Contact', email: 'new@example.com' };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="contacts-container">
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <li className="contact-item" key={contact.id}>
            {contact.name} - {contact.email}
            <button className="btn" onClick={() => deleteContact(contact.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={addContact}>Ajouter un Contact</button>
    </div>
  );
}

export default Contacts;