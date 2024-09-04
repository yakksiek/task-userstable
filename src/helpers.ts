export const sortItems = <T>(items: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] => {
    const newArr: T[] = [...items];
    return newArr.sort((a, b) => {
        const keyA = a[key];
        const keyB = b[key];

        if (keyA < keyB) {
            return order === 'asc' ? -1 : 1;
        }
        if (keyA > keyB) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    });
};
