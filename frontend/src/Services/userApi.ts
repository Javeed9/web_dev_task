interface formData {
    name?: string,
    email: string,
    password: string
}

export const registerUser = async (data: formData) => {
    const response = await fetch('http://localhost:5000/api/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  };
  
export const login = async (data: formData) => {
const response = await fetch('http://localhost:5000/api/user/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});
    return await response.json();
};

export const getUsers = async () => {
  const token = localStorage.getItem("auth");
  const response = await fetch('http://localhost:5000/api/user', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
  });
  return await response.json();
};
