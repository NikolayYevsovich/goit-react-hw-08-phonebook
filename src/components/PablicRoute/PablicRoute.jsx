import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../Hooks/useLogin';

export const PublicRoute = () => {
  const isUserLogin = useLogin();

  if (isUserLogin) {
    <Navigate to={'/contacts'} />;
  }

  return <Outlet />;
};
