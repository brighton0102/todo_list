export const addNewItem = (itemDescription, itemsLength) => {
  const newItem = {
    description: itemDescription,
    completed: false,
    index: itemsLength + 1,
  };
  return newItem;
};

export const removeItems = (items, index) => {
  items.splice(index, 1);
  let i = index;
  while (i < items.lenghth) {
    items[i].index = i + 1;
    i += 1;
  }
};

export const clearAllCompleted = (items) => {
  const newTodos = items.filter((todo) => todo.completed !== true);
  newTodos.forEach((el, i) => {
    el.index = i + 1;
  });
  localStorage.setItem("toDoList", JSON.stringify(newTodos));
  // eslint-disable-next-line no-restricted-globals
  location.reload(true);
};
