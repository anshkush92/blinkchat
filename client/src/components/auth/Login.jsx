import { useState } from 'react';
import Input from '../common/inputs/Input';
import SubmitButton from '../common/buttons/SubmitButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
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
