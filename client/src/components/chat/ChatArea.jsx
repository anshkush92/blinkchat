import React from 'react';

const ChatArea = () => {
  return (
    <div className='bg-blue-200 grow-[1]'>
      {' '}
      Current User - {localStorage.getItem('blinkchat-current-user-username')}
    </div>
  );
};

export default ChatArea;
