// Get elements
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', function() {
    const taskText = input.value.trim();
    if(taskText === '') return;

    // Hide "No tasks" message
    const emptyMsg = document.getElementById('emptyMsg');
    if(emptyMsg) emptyMsg.style.display = 'none';

    // Create li
    const li = document.createElement('li');

    // Task text span
    const span = document.createElement('span');
    span.textContent = taskText;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.onclick = function(){
        taskList.removeChild(li);

        // Show "No tasks" if list is empty
        if(taskList.children.length === 0){
            const newEmpty = document.createElement('li');
            newEmpty.id = 'emptyMsg';
            newEmpty.style.textAlign = 'center';
            newEmpty.style.color = '#888';
            newEmpty.textContent = 'No tasks yet. Add one!';
            taskList.appendChild(newEmpty);
        }
    }

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = '';
});