import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../Redux/Contacts/contacts-selectors';
import { selectFilter } from '../Redux/Filter/filter-selectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../Redux/Operations/contacts-operations';
import { setFilter } from '../Redux/Filter/filter-slice';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const filterContacts = event => {
    const action = setFilter(event.currentTarget.value);
    dispatch(action);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter onFilterChange={filterContacts} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={onDeleteContact}
      />
    </div>
  );
}
