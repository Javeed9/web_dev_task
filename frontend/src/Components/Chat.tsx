import { useEffect, useState } from 'react';
import { getAllMessages, sendMessage } from '../Services/messageApi';
import ChatMessage from './Shared/ChatMessage';
import { useGlobalContext } from '../Contexts';

function Chat({chatId="6677ed1ce70a3576961ba3be"}: {chatId: string}) {
  const [textContent, setTextContent] = useState('');
  const { messages } = useGlobalContext();
  console.log(messages);
  return (
    <div
    className='w-[calc(100%-390px)] h-[95vh] absolute top-[2.5vh] left-[365px] border border-[white] bg-[#1F2022] rounded-md'
    >
      <div className='!h-[85vh] overflow-scroll'>
        {messages.map((message) => {
          const time = new Date(message.createdAt).getHours() + ':' + new Date(message.createdAt).getMinutes();
          return <ChatMessage senderName = {message.sender.name} message = {message.content} time = {time} senderId={message.sender._id}/>
        })}
      </div>
      
      <div className='flex w-full absolute bottom-4 left-[2.5%] gap-[2.5%]'>
      <input type="text" placeholder="Type here"
      className="input input-bordered rounded-md w-[85%]"
      onChange={(e) => setTextContent(e.target.value)}
      />
      <button
      onClick={() => {
        sendMessage(textContent, chatId)
        setTextContent('');
      }}
      className="btn btn-success w-[7.5%] h-5">Send</button>
      </div>
    </div> 
  )
}

export default Chat;