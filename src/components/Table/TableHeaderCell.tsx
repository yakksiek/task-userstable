import { useState } from 'react';
import { TbSortAscending, TbSortDescending } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { useAppSelector } from '../../hooks/reduxHooks';

import { setSorting } from '../../features/sorting/sortingSlice';
import * as t from '../../types';
import Input from '../Input';

interface TableHeaderCellProps {
    cellData: t.HeaderCell;
}

const StyledTableHeader = styled.th`
    color: var(--font-color-accent);
    vertical-align: top;
`;

const StyledSortButton = styled.button`
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const StyledButtonContainer = styled.div`
    min-width: 2rem;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    min-height: 2.5rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    font-weight: 500;
`;

function TableHeaderCell({ cellData }: TableHeaderCellProps) {
    const { field, title, filter } = cellData;
    const sorting = useAppSelector(state => state.sorting);
    const [showSort, setShowSort] = useState(false);
    const dispatch = useDispatch();

    const isDescSorting = sorting.column === field && sorting.order === 'desc';
    const isAscSorting = sorting.column === field && sorting.order === 'asc';
    const futureSortingOrder = isDescSorting ? 'asc' : 'desc';

    const handleMouseOver = () => {
        setShowSort(true);
    };

    const handleMouseOut = () => {
        setShowSort(false);
    };

    const handleSort = () => {
        dispatch(setSorting({ column: field, order: futureSortingOrder }));
    };

    return (
        <StyledTableHeader>
            <StyledHeader onClick={handleSort} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <span>{title}</span>
                <StyledButtonContainer>
                    {isDescSorting && (
                        <StyledSortButton>
                            <TbSortAscending color='rgb(195 154 100)' />
                        </StyledSortButton>
                    )}
                    {isAscSorting && (
                        <StyledSortButton>
                            <TbSortDescending color='rgb(195 154 100)' />
                        </StyledSortButton>
                    )}

                    {showSort && !isAscSorting && !isDescSorting && (
                        <StyledSortButton>
                            <TbSortDescending />
                        </StyledSortButton>
                    )}
                </StyledButtonContainer>
            </StyledHeader>
            {filter && <Input filterKey={field} placeholder={`Filter for ${title}`} />}
        </StyledTableHeader>
    );
}

export default TableHeaderCell;
