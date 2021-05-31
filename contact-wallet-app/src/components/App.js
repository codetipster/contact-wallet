import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />;
            }}
            // component={() => (
            //   <ContactList
            //     contacts={contacts}
            //     getContactId={removeContactHandler}
            //   />
            // )}
          />
          <Route
            path="/add"
            render={(props) => {
              <AddContact {...props} addContactHandler={addContactHandler} />;
            }}
            // component={() => (
            //   <AddContact addContactHandler={addContactHandler} />
            // )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
