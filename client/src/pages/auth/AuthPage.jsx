import React from 'react';
import { useLocation } from 'react-router-dom';

import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';

const AuthPage = () => {
  const location = useLocation();

  const isLogin = location.pathname === '/auth/login';

  return <div>{isLogin ? <Login /> : <Register />}</div>;
};

export default AuthPage;
