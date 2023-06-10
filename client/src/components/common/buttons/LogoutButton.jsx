import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  return (
    <button
      className='bg-white px-4 py-0 text-black rounded-md'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
