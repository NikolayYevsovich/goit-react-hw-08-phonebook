import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from '../Filter/filter-slice';
import { contactsReducer } from '../../Redux/Contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
