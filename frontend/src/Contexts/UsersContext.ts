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
}

export type GlobalContent = {
  auth: boolean;
  user: IUser;
  messages: IMessage[];
  setUser: (user: IUser) => void;
  setAuth: (auth: boolean) => void;
  setMessages: (messages: IMessage[]) => void;  // Ensure this function is implemented in createContext default.
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
  setUser: () => {},
  setAuth: () => {},
  setMessages: () => {}, // Added this to match the declared type.
});

export const useGlobalContext = () => useContext(MyGlobalContext);
