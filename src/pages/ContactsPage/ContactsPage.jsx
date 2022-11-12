import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from '../../Redux/Contacts/contacts-selectors';
import { selectFilter } from '../../Redux/Filter/filter-selectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../Redux/Contacts/contacts-operations';
import { setFilter } from '../../Redux/Filter/filter-slice';
import { useEffect, useState } from 'react';
import { useLogin } from '../../Hooks/useLogin';
import { Navigate } from 'react-router-dom';
import {
  Container,
  Overlay,
  Modal,
  OpenButton,
  FilterWrapper,
  CreateContactWrapper,
} from './ContactsPage.styled';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLogin = useLogin();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener('keydown', onClose);

    return () => {
      window.removeEventListener('keydown', onClose);
    };
  });

  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const onClose = event => {
    if (event.code === 'Escape') {
      togleModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      togleModal();
    }
  };

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

  if (!isLogin) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Container>
      {showModal && (
        <Overlay onClick={handleBackdropClick}>
          <Modal>
            <ContactForm addContact={onAddContact} closeForm={togleModal} />
          </Modal>
        </Overlay>
      )}
      <CreateContactWrapper>
        <OpenButton onClick={() => togleModal()}>ADD NEW CONTACT</OpenButton>
        <FilterWrapper>
          <Filter onFilterChange={filterContacts} />
        </FilterWrapper>
      </CreateContactWrapper>

      {!isLoading && contacts.length > 0 && (
        <ContactList
          contacts={getFilteredContacts()}
          deleteContact={onDeleteContact}
        />
      )}
    </Container>
  );
};
