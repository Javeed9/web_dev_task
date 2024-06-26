import { useState } from 'react';
import './App.css';
import { Auth, Home } from './Pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyGlobalContext, IUser, IMessage } from './Contexts';

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

  // Initialize messages state
  const [messages, setMessages] = useState<IMessage[]>([]);

  return (
    <>
      <MyGlobalContext.Provider value={{ auth, user, setUser, setAuth, messages, setMessages }}>
        <ToastContainer />
        {!auth ? <Auth /> : <Home />}
      </MyGlobalContext.Provider>
    </>
  );
}

export default App;
