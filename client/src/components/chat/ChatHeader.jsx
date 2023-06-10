import { useContext } from 'react';
import ChatContext from '../../context/chatContext';

import LogoutButton from '../common/buttons/LogoutButton';

const ChatHeader = () => {
  const { currentChat } = useContext(ChatContext);
  return (
    <div className='w-full px-8 py-4 bg-slate-500 flex justify-between'>
      <div className='p-2'>
        <div className='flex items-center gap-x-4'>
          <img
            src='https://mui.com/static/images/avatar/1.jpg'
            alt='User'
            className='w-10 h-10 rounded-full'
          />
          <div className='text-white'>{currentChat?.username}</div>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};

export default ChatHeader;
