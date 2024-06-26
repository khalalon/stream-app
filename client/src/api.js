// api.js
const BASE_URL = 'http://localhost:8000';

async function registerUser(userData) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
}

async function loginUser(username, password) {
    const formDetails = new URLSearchParams();
    formDetails.append('username', username);
    formDetails.append('password', password);

    const response = await fetch(`${BASE_URL}/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDetails,
    });
    return response.json();
}

export { registerUser, loginUser };
