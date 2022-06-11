function createElement(todo) {
  if (!todo) return null;
  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  liElement.dataset.id = todo.id;

  return liElement;
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

  const todoList1 = [
    { id: 1, title: 'Learn javascript' },
    { id: 2, title: 'Learn node' },
    { id: 3, title: 'Learn react' },
  ];

  renderTodoList(todoList1, 'todoList');

  //do something else
})();
