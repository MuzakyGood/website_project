const generateId = () => + new Date();
const generateTodoObject = (id, task, timestamp, isCompleted) => {
    return { id, task, timestamp, isCompleted };
}

const todos = [];
const RENDER_EVENT = 'render-todo';

function addTaskToCompleted(todoId) {
    const todoTarget = todos.find(todo => todo.id === todoId);
    if (!todoTarget) return;
    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function undoTaskFromCompleted(todoId) {
    const todoTarget = todos.find(todo => todo.id === todoId);
    if (!todoTarget) return;
    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
}

function removeTaskFromCompleted(todoId) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex === -1) return;
    todos.splice(todoIndex, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
}

const makeTodo = (todoObject) => {
    const textTitle = document.createElement('h2');
    textTitle.innerText = todoObject.task;  

    const textTimestamp = document.createElement('p');
    textTimestamp.innerText = todoObject.timestamp; 

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimestamp); 

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);
    container.setAttribute('id', `todo-${todoObject.id}`);  

    if (todoObject.isCompleted) {
        const undoButton = document.createElement('button');
        undoButton.classList.add('undo-button');

        undoButton.addEventListener('click', () => undoTaskFromCompleted(todoObject.id)); 
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');

        trashButton.addEventListener('click', () => removeTaskFromCompleted(todoObject.id));  
        container.append(undoButton, trashButton);
    } else {
      const checkButton = document.createElement('button');
      checkButton.classList.add('check-button');
      checkButton.addEventListener('click', () => addTaskToCompleted(todoObject.id));
      container.append(checkButton);
    }
    return container;
}

function addTodo() {
    const textTodo = document.getElementById('title').value;
    const timestamp = document.getElementById('date').value;   

    const generatedID = generateId();

    const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
    todos.push(todoObject); 
    document.dispatchEvent(new Event(RENDER_EVENT));
}

document.addEventListener(RENDER_EVENT, () => {
    const uncompletedTODOList = document.getElementById('todos');
    uncompletedTODOList.innerHTML = ''; 

    const completedTODOList = document.getElementById('completed-todos');
    completedTODOList.innerHTML = '';   

    for (const todoItem of todos) {
        const todoElement = makeTodo(todoItem);

        if (!todoItem.isCompleted) {
          uncompletedTODOList.append(todoElement);
        } else {
          completedTODOList.append(todoElement);
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const submitForm = document.getElementById('form');
    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addTodo();
    });
});