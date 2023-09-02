import clearAllCompleted from './clearAllCompleted.js';

describe('clearAllCompleted function', () => {
  it('should remove all completed items from the list', () => {
    const items = [
      { description: 'Task 1', completed: true },
      { description: 'Task 2', completed: false },
      { description: 'Task 3', completed: true },
    ];

    const updatedItems = clearAllCompleted(items);

    expect(updatedItems.length).toBe(1);
    expect(updatedItems[0].description).toBe('Task 2');
  });

  it('should not modify the list if there are no completed items', () => {
    const items = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: false },
      { description: 'Task 3', completed: false },
    ];

    const updatedItems = clearAllCompleted(items);

    expect(updatedItems).toEqual(items);
  });

  it('should return an empty array if all items are completed', () => {
    const items = [
      { description: 'Task 1', completed: true },
      { description: 'Task 2', completed: true },
      { description: 'Task 3', completed: true },
    ];

    const updatedItems = clearAllCompleted(items);

    expect(updatedItems.length).toBe(0);
  });
});
