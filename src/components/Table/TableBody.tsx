interface TableBodyProps<T> {
    bodyData: T[];
}

function TableBody<T>({ bodyData }: TableBodyProps<T>) {
    return <tbody>TableBody</tbody>;
}

export default TableBody;
