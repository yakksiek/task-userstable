interface UsePaginationProps<T> {
    data: T[];
    currentPage: number;
    itemsPerPage: number;
    setPageHandler: (newPageNumber: number) => void;
}

export const usePagination = <T>({ data, currentPage, itemsPerPage, setPageHandler }: UsePaginationProps<T>) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setPageHandler(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setPageHandler(currentPage - 1);
        }
    };

    return { currentItems, totalPages, handleNextPage, handlePreviousPage };
};
