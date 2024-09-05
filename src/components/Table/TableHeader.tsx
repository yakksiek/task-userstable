import { styled } from 'styled-components';
import * as t from '../../types';
import TableHeaderCell from './TableHeaderCell';

interface TableHeaderProps {
    headerData: t.HeaderCell[];
}

const StyledTableHeader = styled.thead`
    border-bottom: 1.25px solid var(--background-color-main-2);
`;

function TableHeader({ headerData }: TableHeaderProps) {
    return (
        <StyledTableHeader>
            <tr>
                {headerData.map(cellData => (
                    <TableHeaderCell key={cellData.field} cellData={cellData} />
                ))}
            </tr>
        </StyledTableHeader>
    );
}

export default TableHeader;
