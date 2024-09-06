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

export function filterItems<T>(items: T[], filters: Partial<Record<keyof T, string>>): T[] {
    return items.filter(item => {
        for (const key of Object.keys(filters)) {
            const filterKey = key as keyof T;
            const filterValue = filters[filterKey]?.toLowerCase();
            const itemValue = item[filterKey]?.toString().toLowerCase() || '';

            if (filterValue && !itemValue.includes(filterValue)) {
                return false;
            }
        }
        return true;
    });
}

export function isAnyObjectValueTrue(obj: Record<string, any>): boolean {
    return Object.values(obj).some(value => value);
}
