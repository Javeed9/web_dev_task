import Avatar from './Avatar'
import { onlineStatus } from './Avatar'

type props = {
    name?: string,
    lastMessage?: string,
    lastMessageTime?: string,
    online?: onlineStatus,
    avatarSrc?: string,
    unread?: number,
    isTyping?: boolean
    customStyles?: object
}

function Card({name, lastMessage, lastMessageTime, online, avatarSrc, unread, isTyping, customStyles} : props) {

    return (
        <div style={customStyles} className='flex gap-2 p-2 bg-[#161719] rounded-xl w-fit mx-2 my-2 hover:bg-[#1F2022]'>
            <Avatar
                avatarSrc={avatarSrc}
                online={online}
                customStyles = {{height: "3.25rem", width: "3.25rem", marginTop: "auto", marginLeft: "auto"}}
            />

        <div className='min-w-44 max-w-44 flex flex-col justify-between p-1 gap-1'>
            <h2 className='text-ms font-[600] text-white'>{name}</h2>
            {isTyping === undefined ? (<></>) : (isTyping ? (
                <p className='text-sm'>Typing...</p>
            ) : (
                <p className='text-sm'>{lastMessage.length <= 20 ? lastMessage : lastMessage.substring(0,20) + "..."}</p>
            ))}
        </div>

        <div className='flex flex-col justify-center items-center max-w-12 min-w-12 gap-1'>
        <div>
            <p className={`${unread > 0 ? "visible" : "invisible"} text-white text-sm flex justify-center items-center bg-[#F8734A] font-bold rounded-full w-6 h-6`}>{unread}</p>
        </div>
        <p className='text-[12px]'>
        {lastMessageTime}
        </p>
        </div>
        </div>

    )
}

export default Card