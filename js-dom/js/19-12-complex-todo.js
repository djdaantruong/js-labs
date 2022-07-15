function createElement(todo) {
  if (!todo) return null;

  // find template
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  // clone li element
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;

  //update content where needed
  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  //TODO: attach event for buttons

  return todoElement;
}

function renderTodoList(todoList, ulElementId) {
  // TODO:
  // find ul element
  // loop throughttodoList
  // each todo => create li element =>append to ul

  // FIXME:
  if (!Array.isArray(todoList) || todoList.length === 0) return;
  const ulElement = document.getElementById(ulElementId);
  if (!ulElement) return;

  for (const todo of todoList) {
    const liElement = createElement(todo);
    ulElement.appendChild(liElement);
  }

  console.log('fixme');
}

// main
(() => {
  const todoList = [
    { id: 1, title: 'Learn javascript' },
    { id: 2, title: 'Learn node' },
    { id: 3, title: 'Learn react' },
  ];

  renderTodoList(todoList, 'todoList');

  //do something else
})();
