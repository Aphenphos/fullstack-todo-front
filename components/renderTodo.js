
import { deleteTodo, updateTodo } from "../todo-utils.js";
import { handlePageLoad } from "../todo/todo.js";

export default function createTodos(root) {
    return (todos) => {
        root.innerHTML = '';
        for (const todo of todos) {
            root.append(Todo({ todo }));
        }
    };
}

function Todo({ todo }) {
    const li = document.createElement('li');
    li.classList.add('todo');

    const h2 = document.createElement('h2');
    h2.textContent = todo.task;

    const checkbox = document.createElement('input');
    checkbox.classList.add('toggle');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            updateTodo(todo.id, { done: true });
        } else {
            updateTodo(todo.id, { done: false });
        }   
    });

    const button = document.createElement('button');
    button.textContent = 'Delete'
    button.classList.add('delete-button');
    button.addEventListener('click', () => {
        deleteTodo(todo.id);
        handlePageLoad();
    })
    if (todo.done === true) {
        checkbox.checked = true
    };

    li.append(h2, checkbox, button);

    return li;
}
