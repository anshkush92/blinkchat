import { useContext, useState, useEffect, useRef } from 'react';
import ChatContext from '../../context/chatContext';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import Message from './Message';
import Welcome from './Welcome';

import url from '../../utils/apiRoutes';

const ChatArea = ({ socket }) => {
  const { currentChat, currentUser, message, setMessage } =
    useContext(ChatContext);
  const scrollRef = useRef();
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

  useEffect(() => {
    if (socket.current) {
      // Listens for the receive-message event from the server
      socket.current.on('receive-message', (message) => {
        console.log(message);
        setMessage({ self: false, message });
      });
    }
  }, [socket, setMessage]);

  // Adds the message to the messages array
  useEffect(() => {
    message && setMessages((messages) => [...messages, message]);
  }, [message]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
            {messages?.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col gap-y-2 py-4 ${
                  message.self ? 'items-end' : 'items-start'
                }`}
              >
                {message?.message?.length && (
                  <Message message={message?.message} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {!currentChat && <Welcome />}
      {currentChat && <ChatInput socket={socket} />}
    </div>
  );
};

export default ChatArea;
