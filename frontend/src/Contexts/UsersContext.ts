import { createContext, useContext } from "react"

export interface Iuser {
  _id : string,
  email: string,
  name: string,
  pics?: string,
  token: string
}

export type GlobalContent = {
  auth: boolean
  user: Iuser
  setUser:(user: Iuser) => void
  setAuth: (auth: boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
  auth: false,
  user: {
          _id: "",
          email: "",
          name: "",
          pics: "",
          token: "",
  },
  setUser: () => {},
  setAuth: () => {},
})

export const useGlobalContext = () => useContext(MyGlobalContext)