import { useContext } from 'react';
import ChatContext from '../../context/chatContext';

const Welcome = () => {
  const { currentUser } = useContext(ChatContext);

  return (
    <div>
      <div>
        Welcome{' '}
        <span className='text-blue-700 text-2xl'>{currentUser?.username},</span>
      </div>
      <div>Please select a chat to start chatting</div>
    </div>
  );
};

export default Welcome;
