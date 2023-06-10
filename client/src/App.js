import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home/HomePage';
import Auth from './pages/auth/AuthPage';
import Chat from './pages/chat/ChatPage';

const App = () => {
  return (
    <div>
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/register' element={<Auth />} />
          <Route path='/auth/login' element={<Auth />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
