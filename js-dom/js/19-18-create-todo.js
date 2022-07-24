// TODO: Happy coding!

function createElement(todo) {
  if (!todo) return null;

  // find template
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  // clone li element
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  todoElement.dataset.status = todo.status;

  // render todo status
  const divElement = todoElement.querySelector('div.todo');
  if (!divElement) return null;

  const alertClass = todo.status === 'completed' ? 'alert-success' : 'alert-secondary';
  divElement.classList.remove('alert-secondary');
  divElement.classList.add(alertClass);

  // render button status
  const btnElement = todoElement.querySelector('button.btn');
  if (!btnElement) return null;

  const btnNewClass = todo.status === 'completed' ? 'btn-success' : 'btn-dark';
  btnElement.classList.remove('btn-success');
  btnElement.classList.add(btnNewClass);

  const newContent = todo.status === 'completed' ? 'Finish' : 'Reset';
  btnElement.textContent = newContent;

  //update content where needed
  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  // attach event for buttons
  // add click event for mark as done button
  const markAsDoneButton = todoElement.querySelector('button.mark-as-done');
  if (markAsDoneButton) {
    markAsDoneButton.addEventListener('click', () => {
      const currentStatus = todoElement.dataset.status;
      const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';

      // get current todo list
      // update status of current todo
      // save to localStorage
      const todoList = getTodolist();
      const index = todoList.findIndex((x) => x.id === todo.id);
      if (index >= 0) {
        todoList[index].status = newStatus;
        localStorage.setItem('todo_list', JSON.stringify(todoList));
      }

      // update data-status on li element
      todoElement.dataset.status = newStatus;

      // update alert class accordingly
      const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-secondary';
      divElement.classList.remove('alert-success', 'alert-secondary');
      divElement.classList.add(newAlertClass);

      // update btn class accordingly
      const newBtnClass = currentStatus === 'pending' ? 'btn-success' : 'btn-dark';
      btnElement.classList.remove('btn-success', 'btn-dark');
      btnElement.classList.add(newBtnClass);

      // update btn content accordingly
      const newBtnContent = currentStatus === 'pending' ? 'Finish' : 'Reset';
      btnElement.textContent = newBtnContent;
    });
  }

  // add click event for remove button
  const removeButton = todoElement.querySelector('button.remove');
  if (removeButton) {
    removeButton.addEventListener('click', () => {
      // save to localStorage
      const todoList = getTodolist();

      const newTodoList = todoList.filter((x) => x.id !== todo.id);
      localStorage.setItem('todo_list', JSON.stringify(newTodoList));

      // remove from dom
      todoElement.remove();
    });
  }

  return todoElement;
}

function renderTodoList(todoList, ulElementId) {
  // find ul element
  // loop throughttodoList
  // each todo => create li element =>append to ul

  if (!Array.isArray(todoList) || todoList.length === 0) return;
  const ulElement = document.getElementById(ulElementId);
  if (!ulElement) return;

  for (const todo of todoList) {
    const liElement = createElement(todo);
    ulElement.appendChild(liElement);
  }
}

function getTodolist() {
  try {
    return JSON.parse(localStorage.getItem('todo_list')) || [];
  } catch {
    return [];
  }
}

function handleTodoFormSubmit(event) {
  event.preventDefault();

  // get form value
  // validate form value
  const todoInput = document.getElementById('todoText');
  if (!todoInput) {
    alert('Todo Input Not Found');
    return;
  }

  const newTodo = { id: Date.now(), title: todoInput.value, status: 'pending' };

  // save
  const todoList = getTodolist();
  todoList.push(newTodo);
  localStorage.setItem('todo_list', JSON.stringify(todoList));

  // apply DOM
  const newLiElement = createElement(newTodo);
  const ulElement = document.getElementById('todoList');
  if (!ulElement) return;
  ulElement.appendChild(newLiElement);

  // reset input
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) todoForm.reset();
}

// main
(() => {
  // const todoList = [
  //   { id: 1, title: 'Learn javascript', status: 'completed' },
  //   { id: 2, title: 'Learn node', status: 'pending' },
  //   { id: 3, title: 'Learn react', status: 'pending' },
  // ];
  // localStorage.setItem('todo_list', JSON.stringify(todoList))

  const todoList = getTodolist();
  renderTodoList(todoList, 'todoList');

  //register event submit for todo form
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) {
    todoForm.addEventListener('submit', handleTodoFormSubmit);
  }
})();
