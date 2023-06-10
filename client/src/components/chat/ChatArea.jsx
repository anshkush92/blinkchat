import { useContext } from 'react';
import ChatContext from '../../context/chatContext';

const ChatArea = () => {
  const { currentUser } = useContext(ChatContext);
  return (
    <div className='bg-blue-200 grow-[1]'>
      {' '}
      Current User - {currentUser?.username}
    </div>
  );
};

export default ChatArea;
