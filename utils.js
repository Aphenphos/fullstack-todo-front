const BASE_URL = 'https://fullstack-todo-maxzak.herokuapp.com';
//localhost:7890/api/v1/users
export async function signUpUser(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('/todo');
    } else {
        console.error(data.message);
    }
}

export async function signInUser(userInfo) {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include',
    });
    if (resp.ok) {
        const user = await resp.json();
        location.replace('/todo');
        return user;
    }
}

export async function getUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        credentials: 'include',
    });
    if (resp.ok) {
        const user = await resp.json();
        return user;
    }
}

export async function logoutUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('../');
    }
}

export async function redirectNonUsers() {
    const user = await getUser();
    if (!user) {
        location.replace('/');
    }
}

export async function redirectExistingUsers() {
    const user = await getUser();
    if (user) {
        location.replace('/todo');
    }
}
