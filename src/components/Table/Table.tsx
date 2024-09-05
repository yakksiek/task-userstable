import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import * as h from '../../helpers';
import * as t from '../../types';
import Heading from '../Heading';
import { StyledScrollableContainer, StyledTable } from './Table.styled';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Pagination from '../Pagination';
import { setPage } from '../../features/users/usersSlice';
import { usePagination } from '../../hooks/usePagination';

interface TableProps {
    tableContent: t.User[];
    headerData: t.HeaderCell[];
    title?: string;
    currentPage: number;
    itemsPerPage: number;
}

function Table({ tableContent, headerData, title, currentPage, itemsPerPage }: TableProps) {
    const { column: sortingColumn, order: sortingOrder } = useAppSelector(store => store.sorting);
    const filters = useAppSelector(store => store.filters);
    const dispatch = useAppDispatch();

    const filteredUsers = useMemo(() => {
        return h.filterItems(tableContent, filters);
    }, [tableContent, filters]);

    const sortedUsers = useMemo(() => {
        return h.sortItems(filteredUsers, sortingColumn, sortingOrder);
    }, [filteredUsers, tableContent, sortingColumn, sortingOrder]);

    const handlePageChange = (newPageNumber: number) => {
        dispatch(setPage(newPageNumber));
    };

    const { currentItems, totalPages, handleNextPage, handlePreviousPage } = usePagination({
        data: sortedUsers,
        currentPage,
        itemsPerPage,
        setPageHandler: handlePageChange,
    });

    return (
        <div>
            {title && (
                <Heading as='h2' $marginBottom={true} $textAlign='left'>
                    {title}
                </Heading>
            )}
            <StyledScrollableContainer>
                <StyledTable>
                    <TableHeader headerData={headerData} />
                    <TableBody bodyData={currentItems} headerData={headerData} />
                </StyledTable>
            </StyledScrollableContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
                setPageHandler={handlePageChange}
            />
        </div>
    );
}

export default Table;
