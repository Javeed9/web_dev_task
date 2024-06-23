import { useState } from 'react';
import './App.css';
import { Auth, Home } from './Pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyGlobalContext, Iuser } from './Contexts'

export const notify = (message: string | undefined) => toast(message);

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<Iuser>({
    _id: "",
    email: "",
    name: "",
    pics: "",
    token: "",
})

  return (
    <>
      <MyGlobalContext.Provider value={{auth, setAuth, user, setUser}}>
        <ToastContainer />
        {!auth ? <Auth /> : <Home />}
      </MyGlobalContext.Provider>
    </>
  )

}

export default App;
