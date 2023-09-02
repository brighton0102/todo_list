import editElem from './editElem.js';

// Mock localStorage for testing purposes
const mockLocalStorage = {
  getItem: jest.fn(() => JSON.stringify([{ description: 'Task 1' }, { description: 'Task 2' }])),
  setItem: jest.fn(),
};

beforeEach(() => {
  global.localStorage = mockLocalStorage;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('editElem function', () => {
  it('should update the description of an item in the list', () => {
    const items = JSON.parse(localStorage.getItem('toDoList')) || [];
    const indexToEdit = 0;
    const newValue = 'Updated Task 1';

    const updatedItems = editElem(items, indexToEdit, newValue);

    expect(updatedItems[indexToEdit].description).toBe(newValue);
  });

  it('should not modify items if the index is out of bounds', () => {
    const items = [
      { description: 'Task 1' },
      { description: 'Task 2' },
    ];
    const indexToEdit = 10; // Out of bounds
    const newValue = 'Updated Task';

    const updatedItems = editElem(items, indexToEdit, newValue);

    expect(updatedItems).toEqual(items); // Items should remain unchanged
  });
});
