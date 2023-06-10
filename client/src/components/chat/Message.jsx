import React from 'react';

const Message = ({ message }) => {
  return (
    <div className='bg-white text-black p-2 w-80 rounded-md mx-4'>
      {message}
    </div>
  );
};

export default Message;
