import { useState, useEffect } from 'react';
import './App.css';
import { Auth, Home } from './Pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyGlobalContext, IUser, IMessage } from './Contexts';
import { socketService } from './Services/WebSocket';

export const notify = (message: string | undefined) => toast(message);

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<IUser>({
    _id: "",
    email: "",
    name: "",
    pics: "",
    token: "",
  });
  const [chatId, setChatId] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (auth) {
      socketService.connect(user, setMessages);
    } else {
      socketService.disconnect();
      setMessages([]);
    }

    return () => {
      socketService.disconnect();
    };
  }, [auth]);


  return (
    <>
      <MyGlobalContext.Provider value={{ auth, user, setUser, setAuth, messages, setMessages, chatId, setChatId }}>
        <ToastContainer />
        {!auth ? <Auth /> : <Home />}
      </MyGlobalContext.Provider>
    </>
  );
}

export default App;
