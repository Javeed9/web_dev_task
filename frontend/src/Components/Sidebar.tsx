import Avatar from './Shared/Avatar'
import ChatList from './ChatList'
import { useGlobalContext } from '../Contexts';

function Sidebar() {
  const { setAuth, user } = useGlobalContext();
  return (
    <div className="w-[330px] h-[95vh] fixed left-0 mx-4 my-[2.5vh] border-r-2 border-[#1F2022]">
        <div className='flex justify-start gap-4 p-4'>
            <Avatar name={user.name} customStyles={{height: "3.25rem", width: "3.25rem"}}/>
            <button
                className="hover:bg-[#1F2022] text-white font-bold px-4 rounded"
                onClick={() => setAuth(false)}
            >Logout</button>
        </div>
        <ChatList/>
    </div>
  )
}

export default Sidebar