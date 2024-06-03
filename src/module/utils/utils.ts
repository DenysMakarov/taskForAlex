
export const loadTodosFromLocalStorage = <T>(key: string): T[] => {
    const itemsJson = localStorage.getItem(key);
    if (itemsJson) {
        try {
            return JSON.parse(itemsJson) as T[];
        } catch (error) {
            console.error(`Error parsing ${key} from localStorage`, error);
            return [];
        }
    }
    return [];
};

export const saveTodosToLocalStorage = <T>(key: string, items: T[]): void => {
    localStorage.setItem(key, JSON.stringify(items));
};
