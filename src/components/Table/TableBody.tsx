import * as t from '../../types';

interface TableBodyProps {
    bodyData: t.SimpleUser[];
    headerData: t.HeaderCell[];
}

function TableBody({ bodyData, headerData }: TableBodyProps) {
    return (
        <tbody>
            {bodyData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                    {headerData.map((header, cellIndex) => (
                        <td key={cellIndex}>{rowData[header.field as keyof t.SimpleUser]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;
