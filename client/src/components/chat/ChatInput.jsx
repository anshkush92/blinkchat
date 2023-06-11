import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import url from '../../utils/apiRoutes';
import ChatContext from '../../context/chatContext';

const ChatInput = () => {
  const { currentChat, currentUser } = useContext(ChatContext);
  const [message, setMessage] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${url}/messages/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          from: currentUser.email,
          to: currentChat.email,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }

    console.log(message);
    setMessage('');
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className='bg-green-700 p-4 w-full'>
      <form
        className='flex gap-x-4 items-center justify-evenly'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='text-black w-full p-2 rounded-md appearance-none'
          placeholder='Type a message'
          value={message}
          onChange={handleMessage}
        />
        <button
          className='bg-black px-4 py-2 rounded-md'
          onSubmit={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
