import updateCompletedStatus from './updateCompletedStatus.js';

describe('updateCompletedStatus function', () => {
  it('should update the completed status of an item to true', () => {
    const items = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: false },
    ];
    const indexToUpdate = 0;
    const newStatus = true;

    const updatedItems = updateCompletedStatus(items, indexToUpdate, newStatus);

    expect(updatedItems[indexToUpdate].completed).toBe(newStatus);
  });

  it('should update the completed status of an item to false', () => {
    const items = [
      { description: 'Task 1', completed: true },
      { description: 'Task 2', completed: true },
    ];
    const indexToUpdate = 1;
    const newStatus = false;

    const updatedItems = updateCompletedStatus(items, indexToUpdate, newStatus);

    expect(updatedItems[indexToUpdate].completed).toBe(newStatus);
  });

  it('should not modify items if the index is out of bounds', () => {
    const items = [
      { description: 'Task 1', completed: false },
      { description: 'Task 2', completed: false },
    ];
    const indexToUpdate = 10;
    const newStatus = true;

    const updatedItems = updateCompletedStatus(items, indexToUpdate, newStatus);

    expect(updatedItems).toEqual(items);
  });
});
