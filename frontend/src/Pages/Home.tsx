import Chat from '../Components/Chat'
import Sidebar from '../Components/Sidebar'
import { useGlobalContext } from '../Contexts'

function Home() {
  const {chatId} = useGlobalContext()
  return (
    <div>
        <Sidebar />
        <Chat chatId={chatId}/>
    </div>
  )
}

export default Home