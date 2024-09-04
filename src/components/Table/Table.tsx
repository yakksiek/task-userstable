import { useMemo } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';

import * as h from '../../helpers';
import * as t from '../../types';
import Heading from '../Heading';
import { StyledScrollableContainer, StyledTable } from './Table.styled';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

interface TableProps {
    tableContent: t.User[];
    headerData: t.HeaderCell[];
    title?: string;
}

function Table({ tableContent, headerData, title }: TableProps) {
    const { column: sortingColumn, order: sortingOrder } = useAppSelector(store => store.sorting);

    const sortedUsers = useMemo(() => {
        return h.sortItems(tableContent, sortingColumn, sortingOrder);
    }, [tableContent, sortingColumn, sortingOrder]);

    return (
        <div>
            {title && (
                <Heading as='h2' $marginBottom={true}>
                    {title}
                </Heading>
            )}
            <StyledScrollableContainer>
                <StyledTable>
                    <TableHeader headerData={headerData} />
                    <TableBody bodyData={sortedUsers} headerData={headerData} />
                </StyledTable>
            </StyledScrollableContainer>
        </div>
    );
}

export default Table;
