import ContactForm from 'Components/ContactForm/ContactForm';
import { ContactIem } from 'Components/ContactItem/ContactItem';
import { ContactList } from 'Components/ContactList/ContactList';
import { Filter } from 'Components/Filter/Filter';
import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList>
        <ContactIem />
      </ContactList>
    </div>
  );
};

export default ContactsPage;
