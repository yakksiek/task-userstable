import * as t from '../../types';
import TableHeaderCell from './TableHeaderCell';

interface TableHeaderProps {
    headerData: t.HeaderCell[];
}

function TableHeader({ headerData }: TableHeaderProps) {
    return (
        <thead>
            <tr>
                {headerData.map(cellData => (
                    <TableHeaderCell key={cellData.field} cellData={cellData} />
                ))}
            </tr>
        </thead>
    );
}

export default TableHeader;
