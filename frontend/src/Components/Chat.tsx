import { useEffect, useState } from 'react';
import { getAllMessages, sendMessage } from '../Services/messageApi';
import ChatMessage from './Shared/ChatMessage';


function Chat({chatId="6677ed1ce70a3576961ba3be"}: {chatId: string}) {
  const [textContent, setTextContent] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async (chatId: string) => {
      const response = await getAllMessages(chatId)
      setMessages(response);
    }
  }, [])
  return (
    <div
    className='w-[calc(100%-390px)] h-[95vh] absolute top-[2.5vh] left-[365px] border border-[white] bg-[#1F2022] rounded-md'
    >
      <div className='!h-[85vh] overflow-scroll'>
        
      <ChatMessage senderName = "Syed" message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo similique voluptatibus ea dolorum officiis cumque eum praesentium commodi magnam, consequatur dolores quae dolorem labore ducimus temporibus recusandae nisi velit ipsam?" time = "20:28" senderId='1'/>
      <ChatMessage senderName = "Syed" message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo similique voluptatibus ea dolorum officiis cumque eum praesentium commodi magnam, consequatur dolores quae dolorem labore ducimus temporibus recusandae nisi velit ipsam?" time = "20:28" senderId='1'/>
      <ChatMessage senderName = "Syed" message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo similique voluptatibus ea dolorum officiis cumque eum praesentium commodi magnam, consequatur dolores quae dolorem labore ducimus temporibus recusandae nisi velit ipsam?" time = "20:28" senderId='1'/>
      <ChatMessage senderName = "Syed" message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo similique voluptatibus ea dolorum officiis cumque eum praesentium commodi magnam, consequatur dolores quae dolorem labore ducimus temporibus recusandae nisi velit ipsam?" time = "20:28" senderId='1'/>
      <ChatMessage senderName = "Syed" message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo similique voluptatibus ea dolorum officiis cumque eum praesentium commodi magnam, consequatur dolores quae dolorem labore ducimus temporibus recusandae nisi velit ipsam?" time = "20:28" senderId='1'/>
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