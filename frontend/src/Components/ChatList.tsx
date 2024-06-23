import Card from './Shared/Card'

function ChatList({chatList}) {
  // Write function get messages
  const testData = [
    {
      name: "Syed Javeed",
      lastMessage: "Me",
      lastMessageTime: "Now",
      online: "online",
      unread: 0,
      isTyping: false,
      isHighlight: false
    },
    {
      name: "Syed Javeed",
      lastMessage: "Me",
      lastMessageTime: "Now",
      online: "online",
      unread: 0,
      isTyping: false,
      isHighlight: false
    }
  ]
  const testContactsData = [
    {
      name: "Syed Javeed",
    },
    {
      name: "Syed Javeed",
    }
  ]
  return (
    <div className='w-fit'>
      <div>
        <div className='flex items-center justify-between w-[295px] m-4'>
        <h1 className = "text-xl font-bold">{ chatList ? "Messages" : "New Chat"}</h1>
        <div className='p-[6px] rounded-lg hover:bg-[#494b51]'>
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#7D848F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#7D848F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        </div>
        <div className='w-[295px] mx-4'>
        <label className="input input-bordered flex items-center gap-2 h-6 pt-4 pr-2 pb-[1.25rem] pl-[0.5rem];">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          <input type="text" className="w-[90%]" placeholder="Search"/>
        </label>
        </div>
        <div className='h-80 overflow-scroll'>

        { chatList ? (testData.map( (user) => (
          <Card name={user.name} lastMessage={user.lastMessage} lastMessageTime={user.lastMessageTime} online={user.online} unread={user.unread} isTyping={user.isTyping} customStyles={{backgroundColor: `${user.isHighlight && '#1F2022'}`}}/>
        )) ) : (testContactsData.map ( (user) => (
          <Card name={user.name}/>
        )))}
        </div>
      </div>
    </div>
  )
}

export default ChatList