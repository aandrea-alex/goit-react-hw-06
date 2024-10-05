import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import TitleSection from './TitleSection/TitleSection';
import ContactForm from './ContactForm/ContactForm';
import { SEARCH_LABEL, TITLE } from '../js/constants';
import { getContactList } from '../js/localstorage/getContactList';
import { saveContactList } from '../js/localstorage/saveContactList';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import styles from './App.module.css';

function App() {
  const [contact, setContact] = useState(getContactList);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContact(prevContact => [
      ...prevContact,
      { ...newContact, id: nanoid() },
    ]);
  };

  const handleDeleteContact = id => {
    setContact(prevContact => prevContact.filter(contact => contact.id !== id));
  };

  const handleChangeSearch = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    saveContactList(contact);
  }, [contact]);

  const filteredContact = contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleChangeSearch}>
        {SEARCH_LABEL}
      </SearchBox>
      <ContactList
        contacts={filteredContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
