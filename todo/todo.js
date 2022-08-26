import { logoutUser, redirectNonUsers } from '../utils.js';
import { getAllTodos, createTodo } from '../todo-utils.js';
import createTodos from '../components/renderTodo.js';

let todos = [];

const newTaskForm = document.getElementById('new-form');
const logOutButton = document.getElementById('logout');

export async function handlePageLoad() {
    await redirectNonUsers();
    todos = await getAllTodos();
    display();
}

newTaskForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const formData = new FormData(newTaskForm);
    await createTodo({ task: formData.get('new-task') });
    newTaskForm.reset();
    handlePageLoad();
});


logOutButton.addEventListener('click', async() => {
    await logoutUser();
});

const CreateTodos = createTodos(document.querySelector('#tasks'));

async function display() {
    await CreateTodos(todos);
}

handlePageLoad();
