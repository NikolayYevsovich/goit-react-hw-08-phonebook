import PropTypes from 'prop-types';
import {
  ListOfContacts,
  ListText,
  ListItem,
  DeleteButton,
  ErrorText,
} from './ContactList.styled';
import { TiDeleteOutline } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import {
  selectIsLoading,
  selectError,
} from '../../Redux/Contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';

export const ContactList = ({ contacts, deleteContact }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <ListText>Contact List</ListText>
      <ListOfContacts>
        {isLoading && <InfinitySpin width="200" color="#4fa94d" />}
        {error && <ErrorText>Oops, something went wrong</ErrorText>}
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <DeleteButton type="button" onClick={() => deleteContact(id)}>
              <IconContext.Provider
                value={{
                  color: 'white',
                  className: 'global-class-name',
                  size: '25px',
                }}
              >
                <TiDeleteOutline />
              </IconContext.Provider>
            </DeleteButton>
          </ListItem>
        ))}
      </ListOfContacts>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
