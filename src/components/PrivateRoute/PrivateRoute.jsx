import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../Hooks/useLogin';

export const PrivateRoute = () => {
  const isUserLogin = useLogin();

  if (!isUserLogin) {
    <Navigate to={'/login'} />;
  }

  return <Outlet />;
};
