import * as t from '../../types';

type SimpleUser = Pick<t.User, 'name' | 'username' | 'email' | 'id'>;

interface TableBodyProps {
    bodyData: SimpleUser[];
    headerData: t.HeaderCell[];
}

function TableBody({ bodyData, headerData }: TableBodyProps) {
    return (
        <tbody>
            {bodyData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                    {headerData.map((header, cellIndex) => (
                        <td key={cellIndex}>{rowData[header.field as keyof SimpleUser]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;
