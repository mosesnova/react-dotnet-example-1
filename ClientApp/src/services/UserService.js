export async function getAllUsers() {

    const response = await fetch('https://localhost:5001/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`https://localhost:5001/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}