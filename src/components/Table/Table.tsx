import { styled } from 'styled-components';
import * as t from '../../types';
import Heading from '../Heading';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface TableProps<T> {
    tableContent: T[];
    headerData: t.HeaderCell[];
    title?: string;
}

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

function Table<T>({ tableContent, headerData, title }: TableProps<T>) {
    return (
        <div>
            {title && <Heading as='h2'>{title}</Heading>}
            <StyledTable>
                <TableHeader headerData={headerData} />
                <TableBody bodyData={tableContent} />
            </StyledTable>
        </div>
    );
}

export default Table;
