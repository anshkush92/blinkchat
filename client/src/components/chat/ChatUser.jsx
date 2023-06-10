import { useContext } from 'react';
import ChatContext from '../../context/chatContext';

const ChatUser = ({ users }) => {
  const { currentChat, handleCurrentChat } = useContext(ChatContext);

  return (
    <div className='h-full flex flex-col gap-y-4 bg-[#FFC947] p-4 basis-3/12 justify-between'>
      <div className='flex justify-center text-[#F15412]'>Blinkchat</div>

      <div className='overflow-y-hidden hover:overflow-y-scroll flex flex-col gap-y-2 p-2 bg-red-400'>
        {users &&
          users.map((user, index) => (
            <div
              key={user._id}
              className={`${
                user._id === currentChat ? 'bg-orange-300' : 'bg-[#FEDDBE]'
              } p-2`}
              onClick={() => handleCurrentChat(user)}
            >
              <div className='flex items-center gap-x-2'>
                <img
                  src='https://mui.com/static/images/avatar/1.jpg'
                  alt='User'
                  className='w-10 h-10 rounded-full'
                />
                User {index + 1} - {user.username}
              </div>
            </div>
          ))}
      </div>

      <div className='bg-red-300 p-2'>
        <div className='flex items-center gap-x-2'>
          <img
            src='https://mui.com/static/images/avatar/3.jpg'
            alt='User'
            className='w-10 h-10 rounded-full'
          />
          Current User -{' '}
          {localStorage.getItem('blinkchat-current-user-username')}
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
