export const sendMessage = async (content: string, chatId: string) => {
    console.log(content, chatId);
    
    const token = localStorage.getItem("auth");
    const response = await fetch('http://localhost:5000/api/message/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
        'content': content,
        'chatId': chatId
        })
    });
    return await response.json();
};

export const getAllMessages = async (chatId: string ="6677ed1ce70a3576961ba3be") => {
const token = localStorage.getItem("auth");
const response = await fetch(`http://localhost:5000/api/message/${chatId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
};