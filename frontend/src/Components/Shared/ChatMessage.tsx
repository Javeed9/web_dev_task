import React from 'react';
import Avatar, { onlineStatus } from './Avatar';
import { useGlobalContext } from '../../Contexts';

interface ChatMessageProps {
    avatarSrc?: string;
    onlineStatus?: onlineStatus;
    senderName: string;
    message: string;
    time: string;
    senderId?: string;
    status?: 'delivered' | 'seen';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ avatarSrc, onlineStatus, senderName, message, time, status, senderId }) => {
    const {user: {_id: userId}} = useGlobalContext();
    return (
        <div className={`chat ${senderId === userId ? "chat-end" : "chat-start"} mx-2 p-4`}>
            <div className="chat-image avatar">
                <Avatar
                    customStyles={{ width: '2.5rem', height: '2.5rem' }}
                    online={onlineStatus}
                    avatarSrc={avatarSrc}
                />
            </div>
            <div className="chat-header">
                {senderName}
                <time className="text-xs opacity-50 ml-2">{time}</time>
            </div>
            <div className="chat-bubble">{message}</div>
            {/* <div className="chat-footer opacity-50">
                {status === 'delivered' ? 'Delivered' : `Seen`}
            </div> */}
        </div>
    );
};

export default ChatMessage;