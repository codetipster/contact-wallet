import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div className="container">
        <h2>
          My Contacts
          <Link to="/add">
            <button className="ui button blue right">Add New Contact</button>
          </Link>
        </h2>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      </div>
    );
  });

  return <div>{renderContactList}</div>;
};

export default ContactList;
