import { logoutUser, redirectNonUsers } from "../utils.js";
import { getAllTodos, createTodo } from '../todo-utils.js';

let user = null;
let todos = [];

const newTaskForm = document.getElementById('new-form');
const logOutButton = document.getElementById('logout');

async function handlePageLoad() {
    await redirectNonUsers();
    todos = await getAllTodos();
    console.log(todos);
    display();
}

newTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(newTaskForm);
    await createTodo({task: formData.get('new-task')});
    console.log(newTaskForm);
})


logout.addEventListener('click', async () => {
    await logoutUser();
})

function display() {

}

handlePageLoad();
