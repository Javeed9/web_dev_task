export const accessChat = async (userId: string) => {
  const token = localStorage.getItem("auth");
  const response = await fetch('http://localhost:5000/api/chat/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        'userId': userId
      })
  });

  return await response.json();
};
export const fetchChats = async () => {
  const token = localStorage.getItem("auth");
  const response = await fetch('http://localhost:5000/api/chat/', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
  });
  
  return await response.json();
};