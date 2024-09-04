import { useState } from 'react';
import { styled } from 'styled-components';
import { TbSortAscending, TbSortDescending } from 'react-icons/tb';

import * as t from '../../types';

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
    font-size: 1.175rem;
    color: rgb(195 154 100);
`;

function TableHeaderCell({ cellData }: TableHeaderCellProps) {
    const [showSort, setShowSort] = useState(false);

    const { field, title, filter } = cellData;

    const handleMouseOver = () => {
        setShowSort(true);
    };

    const handleMouseOut = () => {
        setShowSort(false);
    };

    return (
        <StyledTableHeader>
            <StyledHeader onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <span>{title}</span>
                <StyledButtonContainer>
                    {showSort && (
                        <StyledSortButton>
                            <TbSortDescending color='white' />
                        </StyledSortButton>
                    )}
                </StyledButtonContainer>
            </StyledHeader>
            <hr />
            {filter && <p>Input</p>}
        </StyledTableHeader>
    );
}

export default TableHeaderCell;
