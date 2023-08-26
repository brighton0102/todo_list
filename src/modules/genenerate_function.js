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