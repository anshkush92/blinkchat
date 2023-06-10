import { useEffect, useState, useContext, useRef } from 'react';
import ChatContext from '../../context/chatContext';
import { useNavigate } from 'react-router-dom';
import url from '../../utils/apiRoutes';
import ChatUser from './ChatUser';
import ChatArea from './ChatArea';
import host from '../../utils/host';

import { io } from 'socket.io-client';

const ChatContainer = () => {
  const socket = useRef();
  const { currentUser, handleCurrentUser } = useContext(ChatContext);
  const [contacts, setContacts] = useState();

  const navigate = useNavigate();

  console.log(currentUser, contacts);

  // Check if user is already logged in or not
  useEffect(() => {
    if (
      !localStorage.getItem('blinkchat-current-user-email') &&
      !localStorage.getItem('blinkchat-current-user-username')
    ) {
      navigate('/login');
    } else {
      handleCurrentUser({
        username: localStorage.getItem('blinkchat-current-user-username'),
        email: localStorage.getItem('blinkchat-current-user-email'),
      });
    }
  }, [navigate, handleCurrentUser]);

  // Connect to socket
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);

      // Add current user to the socket whenever he/she logs in - Pass its email as a parameter
      socket.current.emit('add-user', currentUser?.email);

      socket.current.on('error', (error) => {
        console.log(error);
      });
    }
  }, [currentUser]);

  // Get all contacts of the current user
  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch(`${url}/users`);
      const data = await response.json();
      console.log(data);

      setContacts(
        data?.users.filter(
          (user) =>
            user?.email !== localStorage.getItem('blinkchat-current-user-email')
        )
      );
    };

    getContacts();
  }, []);

  return (
    <div className='flex bg-black h-3/4  w-5/6 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center'>
      <ChatUser users={contacts} />
      <ChatArea socket={socket} />
    </div>
  );
};

export default ChatContainer;
