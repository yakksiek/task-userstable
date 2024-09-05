import { styled } from 'styled-components';
import * as t from '../../types';

interface TableBodyProps {
    bodyData: t.SimpleUser[];
    headerData: t.HeaderCell[];
}

const StyledTableRow = styled.tr`
    height: 3.5rem;
    transition: background-color 0.3s ease;

    &:not(:last-child) {
        border-bottom: var(--border);
    }

    &:hover {
        background-color: var(--background-color-main-2);
    }
`;

function TableBody({ bodyData, headerData }: TableBodyProps) {
    return (
        <tbody>
            {bodyData.map((rowData, rowIndex) => (
                <StyledTableRow key={rowIndex}>
                    {headerData.map((header, cellIndex) => (
                        <td key={cellIndex}>{rowData[header.field as keyof t.SimpleUser]}</td>
                    ))}
                </StyledTableRow>
            ))}
        </tbody>
    );
}

export default TableBody;
