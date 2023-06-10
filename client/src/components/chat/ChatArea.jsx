import { useContext } from 'react';
import ChatContext from '../../context/chatContext';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';

import Welcome from './Welcome';

const ChatArea = () => {
  const { currentChat } = useContext(ChatContext);

  return (
    <div
      className={`${
        currentChat
          ? 'justify-between items-start'
          : 'justify-center items-center'
      } flex h-full flex-col text-white grow-[1]`}
    >
      {currentChat && <ChatHeader />}
      {!currentChat && <Welcome />}
      {currentChat && <ChatInput />}
    </div>
  );
};

export default ChatArea;
