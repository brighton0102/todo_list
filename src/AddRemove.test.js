import { addNewItem, removeItems } from './modules/genenerate_function.js';

describe('addNewItem', () => {
  test('should add a new item to the list', () => {
    const itemDescription = 'New Item';
    const itemsLength = 3;
    const expectedItem = {
      description: itemDescription,
      completed: false,
      index: itemsLength + 1,
    };

    const result = addNewItem(itemDescription, itemsLength);
    expect(result).toEqual(expectedItem);
  });
});

describe('removeItems', () => {
  test('should remove an item from the list', () => {
    const items = [
      { description: 'Item 1', completed: false, index: 1 },

      { description: 'Item 2', completed: false, index: 2 },

      { description: 'Item 3', completed: false, index: 3 },
    ];

    const indexToRemove = 1;

    const expectedItems = [
      { description: 'Item 1', completed: false, index: 1 },

      { description: 'Item 3', completed: false, index: 3 },
    ];

    removeItems(items, indexToRemove);

    expect(items).toEqual(expectedItems);
  });
});
