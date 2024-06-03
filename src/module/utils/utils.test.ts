import { loadTodosFromLocalStorage, saveTodosToLocalStorage } from './utils';

describe('localStorageUtils', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe('loadFromLocalStorage', () => {
        it('should return an empty array when no items are stored', () => {
            const result = loadTodosFromLocalStorage<string>('nonexistentKey');
            expect(result).toEqual([]);
        });

        it('should return parsed items from localStorage', () => {
            const todos = [{ id: 1, title: 'Test Todo' }];
            localStorage.setItem('todos', JSON.stringify(todos));

            const result = loadTodosFromLocalStorage<typeof todos[0]>('todos');
            expect(result).toEqual(todos);
        });

        it('should return an empty array when parsing fails', () => {
            localStorage.setItem('invalid', 'not a valid JSON');

            const result = loadTodosFromLocalStorage<string>('invalid');
            expect(result).toEqual([]);
        });
    });

    describe('saveToLocalStorage', () => {
        it('should save items to localStorage', () => {
            const todos = [{ id: 1, title: 'Test Todo' }];

            saveTodosToLocalStorage('todos', todos);

            const storedItems = localStorage.getItem('todos');
            expect(storedItems).toEqual(JSON.stringify(todos));
        });
    });
});
