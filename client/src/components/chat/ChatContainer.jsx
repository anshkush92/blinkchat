import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import url from '../../utils/apiRoutes';
import ChatUser from './ChatUser';
import ChatArea from './ChatArea';

const ChatContainer = () => {
  const [currentUser, setCurrentUser] = useState();
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
      setCurrentUser({
        username: localStorage.getItem('blinkchat-current-user-username'),
        email: localStorage.getItem('blinkchat-current-user-email'),
      });
    }
  }, [navigate]);

  // Get all contacts of the current user
  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch(`${url}/users`);
      const data = await response.json();
      console.log(data);
      setContacts(data?.users);
    };

    getContacts();
  }, []);

  return (
    <div className='flex bg-black h-3/4  w-5/6 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center'>
      <ChatUser users={contacts} />
      <ChatArea />
    </div>
  );
};

export default ChatContainer;
