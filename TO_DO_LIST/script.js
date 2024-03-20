document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', function() {
        const taskContent = taskInput.value.trim();
        if (taskContent !== '') {
            addTask(taskContent);
            taskInput.value = '';
        } else {
            alert('Please enter a task before adding!');
        }
    });

    function addTask(content) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const input = document.createElement('input');
        input.type = 'text';
        input.value = content;
        input.setAttribute('readonly', true);

        const editBtn = document.createElement('button');
        editBtn.className = 'editBtn';
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', function() {
            input.removeAttribute('readonly');
            input.focus();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        const completedLabel = document.createElement('span');
        completedLabel.innerText = 'Completed';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        li.appendChild(input);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        li.appendChild(completedLabel);
        li.appendChild(checkbox);

        taskList.appendChild(li);
    }
});
