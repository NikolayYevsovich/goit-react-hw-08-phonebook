import React from 'react';
import { useSelector } from 'react-redux';
import { UserNav } from '../UserNav/UserNav';
import { Header, AppLogo, MainNav } from './AppBar.styled';
import Icon from '../../Images/contact-book-icon.png';
import { AuthNav } from '../AuthNav/AuthNav';
import { LoginNav } from '../LoginNav/LoginNav';
import { selectIsLogin } from '../../Redux/Auth/auth-selectors';

export const AppBar = () => {
  const isUserLogin = useSelector(selectIsLogin);

  return (
    <Header>
      <AppLogo to="/">
        <img src={Icon} alt="dd" width="50" />
      </AppLogo>
      <MainNav>
        <LoginNav />
        {!isUserLogin ? <AuthNav /> : <UserNav />}
      </MainNav>
    </Header>
  );
};
