const addButton = document.getElementById('add-todo-button');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function () {
    const taskText = todoInput.value;
    if (taskText) {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const timestamp = document.createElement('span');
        const currentTime = new Date();
        timestamp.textContent = ` (${currentTime.toLocaleTimeString()})`;
        timestamp.style.marginLeft = "10px";
        timestamp.style.fontSize = "0.9rem";
        timestamp.style.color = "gray";

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.id = 'complete-button';
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'delete-button';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'task-buttons';
        buttonContainer.appendChild(completeButton);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(taskSpan);
        li.appendChild(timestamp);
        li.appendChild(buttonContainer);
        taskList.appendChild(li);

        todoInput.value = '';
    }
});