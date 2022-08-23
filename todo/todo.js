import { logoutUser, getUser } from "../utils.js";
import { getAllTodos, createTodo } from '../todo-utils.js';

let todos = [];

const logOutButton = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await logoutUser();
})

