document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const removeTaskBtn = document.getElementById('removeTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            tasks.push(taskText);
            taskInput.value = '';
            renderTasks();
        }
    });

    removeTaskBtn.addEventListener('click', () => {
        tasks.pop();
        renderTasks();
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }
});
