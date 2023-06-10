import { useState } from 'react';
import ChatContext from '../context/chatContext';

const ChatContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [currentChat, setCurrentChat] = useState();

  // Gives the current user information
  const handleCurrentUser = (user) => {
    console.log('Current user', user);
    setCurrentUser(user);
  };

  // Gives the current chat - User information with which we are chatting
  const handleCurrentChat = (chat) => {
    console.log('Current chat', chat);
    setCurrentChat(chat);
  };

  return (
    <ChatContext.Provider
      value={{ currentUser, currentChat, handleCurrentUser, handleCurrentChat }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
