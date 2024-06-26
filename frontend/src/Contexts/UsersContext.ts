import { createContext, useContext } from "react";

export interface IUser {
  _id: string;
  email: string;
  name: string;
  pics?: string;
  token?: string;
}

export interface IChat {
  _id: string;
  chatName: string;
  isGroupChat: boolean;
  users: IUser[];
  latestMessage: IMessage;
  groupAdmin?: IUser;
}

export interface IMessage {
  sender: IUser;
  content: string;
  chat?: IChat;
  createdAt? : string | undefined;
}

export type GlobalContent = {
  auth: boolean;
  user: IUser;
  messages: IMessage[];
  chatId: string
  setUser: (user: IUser) => void;
  setAuth: (auth: boolean) => void;
  setMessages: (messages: IMessage[]) => void;  // Ensure this function is implemented in createContext default.
  setChatId: (id: string) => void
};

export const MyGlobalContext = createContext<GlobalContent>({
  auth: false,
  user: {
    _id: "",
    email: "",
    name: "",
    pics: "",
    token: "",
  },
  messages: [{
    sender: {
      _id: "",
      email: "",
      name: "",
      pics: "",
      token: "",
    },
    content: "",
    chat: {
      _id: "",
      chatName: "",
      isGroupChat: false,
      users: [],
      latestMessage: {
        sender: {
          _id: "",
          email: "",
          name: "",
          pics: "",
          token: "",
        },
        content: "",
      },
      groupAdmin: {
        _id: "",
        email: "",
        name: "",
        pics: "",
        token: "",
      }
    }
  }],
  chatId: "",
  setUser: () => {},
  setAuth: () => {},
  setMessages: () => {}, // Added this to match the declared type.
  setChatId: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext);
