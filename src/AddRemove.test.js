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
