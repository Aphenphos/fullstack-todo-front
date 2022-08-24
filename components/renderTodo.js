
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
        todoDone(todo);   
    });

    const button = document.createElement('button');
    button.classList.add('delete-button');
    button.addEventListener('click', () => {
        todoDelete(todo);
    })

    li.append(h2, checkbox);

    return li;
}
