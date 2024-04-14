function addTask() {
    let input = document.getElementById('task-input');
    let task = input.value;

    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = task +'<button onclick="processTask(this)">Process</button> <button onclick="completeTask(this)">Complete</button> <button onclick="deleteTask(this)">Delete</button>';
    document.getElementById('task-list').appendChild(li);

    input.value = '';
}



function processTask(button) {
    button.parentNode.classList.add('process');
    
}
function completeTask(button) {
    button.parentNode.classList.add('done');
}
function deleteTask(button) {
    button.parentNode.classList.add('deleted');
}