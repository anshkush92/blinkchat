import { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
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
