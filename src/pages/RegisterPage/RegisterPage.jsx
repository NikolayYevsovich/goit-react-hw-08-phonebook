import React from 'react';
import { Container } from './RegisterPage.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { singup } from '../../Redux/Auth/auth-operations';
import { selectIsLogin } from '../../Redux/Auth/auth-selectors';

export const RegisterPage = () => {
  const disptch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);

  const onRegister = data => {
    disptch(singup(data));
  };

  if (isUserLogin) {
    return <Navigate to={'/contacts'} />;
  }

  return (
    <Container style={{ padding: '50px' }}>
      <RegisterForm onRegister={onRegister} />
    </Container>
  );
};
