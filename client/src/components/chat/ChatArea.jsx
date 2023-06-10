import { useContext } from 'react';
import ChatContext from '../../context/chatContext';

import Welcome from './Welcome';

const ChatArea = () => {
  const { currentChat } = useContext(ChatContext);

  return (
    <div className='flex flex-col justify-center items-center text-white grow-[1]'>
      {currentChat ? (
        <div>Chatting with {currentChat.username}</div>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default ChatArea;
