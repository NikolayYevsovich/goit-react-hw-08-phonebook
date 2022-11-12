// import axios from 'axios';

import instance from './auth-api';

// const instanceContacts = axios.create({
//   baseURL: 'https://635ec943ed25a0b5fe4d03a1.mockapi.io/api/contacts',
// });

// export const fetchContacts = async () => {
//   const { data } = await instanceContacts.get('/');
//   return data;
// };

// export const addContact = async data => {
//   const { data: result } = await instanceContacts.post('/', data);
//   return result;
// };

// export const removeContact = async contactid => {
//   const { data } = await instanceContacts.delete(`/${contactid}`);
//   return data;
// };

// +++++++++++++++++++++++++++++++++

// const instanceContacts = axios.create({
//   baseURL: 'https://635ec943ed25a0b5fe4d03a1.mockapi.io/api/contacts',
// });

export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContact = async contactid => {
  const { data } = await instance.delete(`/contacts/${contactid}`);
  return data;
};
