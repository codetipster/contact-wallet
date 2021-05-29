import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  const contacts = [
    {
      id: '1',
      fullname: 'Samuel Nzekwe',
      email: 'talk2samuelnzekwe@gmail.com',
      phone: '07068565502',
    },
    {
      id: '2',
      fullname: 'Ahuekwe Luke',
      email: 'talk2LukeAhuekwe@gmail.com',
      phone: '07068568898902',
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
