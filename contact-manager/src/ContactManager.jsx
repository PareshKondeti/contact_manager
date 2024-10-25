import React, { useState } from "react";
import "./ContactManager.css";

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addContact = () => {
    if (name && number) {
      setContacts([...contacts, { name, number }]);
      setName("");
      setNumber("");
    }
  };

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, idx) => idx !== index);
    setContacts(newContacts);
  };

  return (
    <div className="container">
      <div className="contact-manager">
        <h2 className="header">Contact Manager</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="button" onClick={addContact}>
          Add Contact
        </button>

        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <span>{contact.name} - {contact.number}</span>
            <button
              className="delete-button"
              onClick={() => deleteContact(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactManager;
