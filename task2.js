const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    addTask(text);
    taskInput.value = "";
  }
});

taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTaskBtn.click();
});

function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.title = 'Complete';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.title = 'Edit';
  editBtn.addEventListener('click', () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.title = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(span, actions);
  taskList.appendChild(li);
}
