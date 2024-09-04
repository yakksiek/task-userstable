import { styled } from 'styled-components';
import * as t from '../../types';
import * as h from '../../helpers';
import Heading from '../Heading';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useMemo } from 'react';

interface TableProps {
    tableContent: t.User[];
    headerData: t.HeaderCell[];
    title?: string;
}

const StyledScrollableContainer = styled.div`
    overflow-x: auto;
    margin-top: 1rem;
    padding: 0 1rem;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    td,
    th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
`;

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
