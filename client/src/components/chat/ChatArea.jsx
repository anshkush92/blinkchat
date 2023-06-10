import { useContext, useState, useEffect } from 'react';
import ChatContext from '../../context/chatContext';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import Message from './Message';
import Welcome from './Welcome';

import url from '../../utils/apiRoutes';

const ChatArea = () => {
  const { currentChat, currentUser } = useContext(ChatContext);
  const from = currentUser?.email;
  const to = currentChat?.email;

  const [messages, setMessages] = useState();

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch(`${url}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ from, to }),
      });
      const data = await response.json();
      console.log(data);
      setMessages(data?.messages);
    };

    getMessages();
  }, [from, to]);

  return (
    <div
      className={`${
        currentChat
          ? 'justify-between items-start'
          : 'justify-center items-center'
      } flex h-full flex-col text-white grow-[1]`}
    >
      {currentChat && (
        <div className='flex flex-col w-full overflow-hidden'>
          <ChatHeader />

          <div className='overflow-y-scroll'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col gap-y-4 py-4 ${
                  message.self ? 'items-end' : 'items-start'
                }`}
              >
                <Message message={message.message} />
              </div>
            ))}
          </div>
        </div>
      )}
      {!currentChat && <Welcome />}
      {currentChat && <ChatInput />}
    </div>
  );
};

export default ChatArea;
