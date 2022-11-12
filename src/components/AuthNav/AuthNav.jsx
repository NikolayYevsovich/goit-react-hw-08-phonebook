import React from 'react';
import { PageLink, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <PageLink to="/login">Login</PageLink>
      <PageLink to="/register">Register</PageLink>
    </AuthNavContainer>
  );
};
