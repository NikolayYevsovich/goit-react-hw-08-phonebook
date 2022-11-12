import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../Redux/Auth/auth-selectors';
import { LoginNavContainer, PageLink } from './LoginNav.styled';

export const LoginNav = () => {
  const isUserLogin = useSelector(selectIsLogin);
  return (
    <LoginNavContainer>
      <PageLink to="/">Home</PageLink>
      {isUserLogin && <PageLink to="/contacts">Contacts</PageLink>}
    </LoginNavContainer>
  );
};
