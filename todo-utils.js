const BASE_URL = 'http://localhost:7890';
//localhost:7890/api/v1/users

export async function getAllTodos() {
    const resp = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
        credentials: 'include',
    });
    return resp.json();
}

export async function createTodo(todo) {
    const resp = await fetch(`${BASE_URL}/api/v1/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
        credentials: 'include',
    });
    return resp.json();
}

export async function updateTodo(id, data) {
    const resp = await fetch(`${BASE_URL}/api/v1/todos/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    });
    return resp.json();
}
