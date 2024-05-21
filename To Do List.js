document.addEventListener('DOMContentLoaded', function() { const form = document.querySelector('form'); const todoInput = document.querySelector('.todo-input'); const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const task = todoInput.value.trim();

    if (task !== '') {
    const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
const taskName = document.createElement('span');
        taskName.textContent = task;
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.classList.add('complete-btn');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add('trash-btn');
        todoItem.appendChild(taskName);
        todoItem.appendChild(completeBtn);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});
todoList.addEventListener('click', function(event) {
    const item = event.target;
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        todo.remove();
    }
});
});