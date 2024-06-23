import React from 'react';

export type onlineStatus = "online" | "offline" | undefined

interface AvatarProps {
    avatarSrc?: string;
    online?: onlineStatus;
    name?: string;
    customStyles?: React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({ avatarSrc, online, name, customStyles }) => {
    const statusClass = online === undefined ? "" : (online === "online" ? "online" : "offline");
    const nameClass = !name ? "placeholder" : "";

    return (
        <div className={`avatar ${statusClass} ${nameClass} rounded-lg`} style={customStyles}>
            {avatarSrc ? (
                <div>
                    <img src={avatarSrc} alt={name || 'Avatar'} />
                </div>
            ) : (
                <div className="bg-neutral text-neutral-content rounded-lg w-24 !flex !justify-center !items-center">
                    <span className="text-3xl">{name?.charAt(0).toUpperCase()}</span>
                </div>
            )}
        </div>
    );
}

export default Avatar;
