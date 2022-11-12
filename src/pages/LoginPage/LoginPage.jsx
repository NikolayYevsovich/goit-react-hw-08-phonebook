import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { login } from '../../Redux/Auth/auth-operations';
import { selectIsLogin } from '../../Redux/Auth/auth-selectors';
import { Container } from './LoginPage.styled';

export const LoginPage = () => {
  const disptch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);

  const onLogin = data => {
    disptch(login(data));
  };

  if (isUserLogin) {
    return <Navigate to={'/contacts'} />;
  }

  return (
    <Container style={{ padding: '50px' }}>
      <LoginForm onLogin={onLogin} />
    </Container>
  );
};
