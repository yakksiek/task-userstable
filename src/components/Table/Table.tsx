import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import * as h from '../../helpers';
import * as t from '../../types';

import { setPage } from '../../features/users/usersSlice';
import { usePagination } from '../../hooks/usePagination';
import Pagination from '../Pagination';
import { StyledResultMessage, StyledScrollableContainer, StyledTable } from './Table.styled';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

interface TableProps {
    tableContent: t.User[];
    headerData: t.HeaderCell[];
    currentPage: number;
    itemsPerPage: number;
}

function Table({ tableContent, headerData, currentPage, itemsPerPage }: TableProps) {
    const { column: sortingColumn, order: sortingOrder } = useAppSelector(store => store.sorting);
    const filters = useAppSelector(store => store.filters);
    const dispatch = useAppDispatch();

    const filteredUsers = useMemo(() => {
        return h.filterItems(tableContent, filters);
    }, [tableContent, filters]);

    const sortedUsers = useMemo(() => {
        return h.sortItems(filteredUsers, sortingColumn, sortingOrder);
    }, [filteredUsers, sortingColumn, sortingOrder]);

    const handlePageChange = (newPageNumber: number) => {
        dispatch(setPage(newPageNumber));
    };

    const { currentItems, totalPages, handleNextPage, handlePreviousPage } = usePagination({
        data: sortedUsers,
        currentPage,
        itemsPerPage,
        setPageHandler: handlePageChange,
    });

    const isResultArrayEmpty = sortedUsers.length === 0;
    const isQueryFilterValid = h.isAnyObjectValueTrue(filters);

    return (
        <div>
            <StyledScrollableContainer>
                <StyledTable>
                    <TableHeader headerData={headerData} />
                    <TableBody bodyData={currentItems} headerData={headerData} />
                </StyledTable>
            </StyledScrollableContainer>
            {isResultArrayEmpty && isQueryFilterValid ? (
                <StyledResultMessage>No results found for your query.</StyledResultMessage>
            ) : (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                    setPageHandler={handlePageChange}
                />
            )}
        </div>
    );
}

export default Table;
