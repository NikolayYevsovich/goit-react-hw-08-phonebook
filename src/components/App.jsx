import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../Redux/contacts-selectors';
import { getFilter } from '../Redux/filter-selectors';
import { addContact, deleteContact } from '../Redux/contacts-slice';
import { setFilter } from '../Redux/filter-slice';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

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
