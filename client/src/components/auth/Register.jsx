import { useState } from 'react';
import Input from '../common/inputs/Input';
import SubmitButton from '../common/buttons/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import url from '../../utils/apiRoutes';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Sending form data to the server
    const data = await fetch(`${url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    // Getting response from the server
    const response = await data.json();

    console.log(response);

    if (response.status === false) {
      toast.error(response.message);
    } else {
      localStorage.setItem('blinkchat-user', username);
      toast.success(response.message);

      // Navigate to homepage after successful login
      navigate('/auth/login');
    }
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form
      className='w-1/4 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 p-4 flex flex-col gap-y-4'
      onSubmit={handleSubmit}
    >
      <Input
        label={'Username'}
        id={'username'}
        type={'string'}
        placeholder={'testkush92'}
        onChange={handleUsername}
        value={username}
      />
      <Input
        label={'Email'}
        id={'email'}
        type={'email'}
        placeholder={'test@gmail.com'}
        onChange={handleEmail}
        value={email}
      />
      <Input
        label={'Password'}
        id={'password'}
        type={'password'}
        placeholder={'Your password'}
        onChange={handlePassword}
        value={password}
      />
      <Input
        label={'Confirm Password'}
        id={'confirm-password'}
        type={'password'}
        placeholder={'Confirm password'}
        onChange={handleConfirmPassword}
        value={confirmPassword}
      />

      <span className='text-xs flex gap-x-1 justify-end'>
        <span>Already have an Account ?</span>
        <span
          className='text-blue-500 cursor-pointer'
          onClick={() => navigate('/auth/login')}
        >
          Login
        </span>
      </span>
      <SubmitButton text='Register' />
    </form>
  );
};

export default Register;
