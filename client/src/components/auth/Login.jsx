import { useState, useEffect } from 'react';
import Input from '../common/inputs/Input';
import SubmitButton from '../common/buttons/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import url from '../../utils/apiRoutes';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Check if user is already logged in - Persistent Login
  useEffect(() => {
    if (
      localStorage.getItem('blinkchat-current-user-username') ||
      localStorage.getItem('blinkchat-current-user-email')
    ) {
      navigate('/chat');
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    const response = await fetch(`${url}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log(data);

    if (data.status) {
      localStorage.setItem(
        'blinkchat-current-user-username',
        data.data.username
      );
      localStorage.setItem('blinkchat-current-user-email', data.data.email);
      toast.success(data.message);
      navigate('/');
    } else {
      toast.error(data.message);
    }

    console.log('Form submitted');
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form
      className='w-1/4 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 p-4 flex flex-col gap-y-4'
      onSubmit={handleSubmit}
    >
      <Input
        label={'Email or Username'}
        id={'email'}
        type={'string'}
        placeholder={'test@gmail.com or testkush92'}
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

      <span className='text-xs flex gap-x-1 justify-end'>
        <span>Don't have an Account ?</span>
        <span
          className='text-blue-500 cursor-pointer'
          onClick={() => navigate('/auth/register')}
        >
          Register
        </span>
      </span>
      <SubmitButton text='Login' />
    </form>
  );
};

export default Login;
