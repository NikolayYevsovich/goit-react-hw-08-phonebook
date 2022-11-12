import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../Redux/Contacts/contacts-selectors';
import {
  ContactsFormBox,
  FormText,
  FormInput,
  FormLabel,
  FormButton,
  CloseButton,
} from './ContactForm.styled';
import { TiDeleteOutline } from 'react-icons/ti';
import { IconContext } from 'react-icons';

export default function ContactForm({ addContact, closeForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const currentContacts = useSelector(selectContacts);

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const existingContact = currentContacts.find(
      contact => name === contact.name
    );

    if (existingContact) {
      return alert(`${name} is already in contacts .`);
    }

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <ContactsFormBox onSubmit={handleSubmit}>
      <FormText>New contact</FormText>
      <CloseButton onClick={closeForm}>
        <IconContext.Provider
          value={{
            color: 'white',
            className: 'global-class-name',
            size: '30px',
          }}
        >
          <TiDeleteOutline />
        </IconContext.Provider>
      </CloseButton>
      <FormLabel htmlFor="">
        <FormInput
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          placeholder="Mike Ross"
        />
      </FormLabel>
      <FormLabel htmlFor="">
        <FormInput
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="123-456-7890"
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </ContactsFormBox>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
