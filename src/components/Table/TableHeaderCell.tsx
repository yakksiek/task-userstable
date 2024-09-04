import * as t from '../../types';

interface TableHeaderCellProps {
    cellData: t.HeaderCell;
}

function TableHeaderCell({ cellData }: TableHeaderCellProps) {
    return <th>{cellData.title}</th>;
}

export default TableHeaderCell;
