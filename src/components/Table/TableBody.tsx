import { styled } from 'styled-components';
import * as t from '../../types';

interface TableBodyProps {
    bodyData: t.SimpleUser[];
    headerData: t.HeaderCell[];
}

const StyledTableRow = styled.tr`
    height: 3.5rem;
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
