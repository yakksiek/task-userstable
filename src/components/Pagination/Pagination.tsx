import { styled } from 'styled-components';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';

import ItemsPerPageSelector from '../ItemsPerPageSelector/ItemsPerPageSelector';
import PaginationButton from './PaginationButton';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
    setPageHandler: (newPageNumber: number) => void;
}

const StyledPaginationContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 2rem;
    margin-top: 2rem;
    padding-top: 0.5rem;
    justify-content: space-between;
    font-size: 0.875rem;
    border-top: var(--border);
`;

const StyledActionButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const StyledPageInformation = styled.span`
    color: var(--font-color-accent);
`;

function Pagination({ currentPage, totalPages, onNextPage, onPreviousPage, setPageHandler }: PaginationProps) {
    const buttons = [
        {
            onClick: () => setPageHandler(1),
            disabled: currentPage === 1,
            icon: <MdOutlineFirstPage />,
        },
        {
            onClick: onPreviousPage,
            disabled: currentPage === 1,
            icon: <GrFormPrevious />,
        },
        {
            onClick: onNextPage,
            disabled: currentPage === totalPages,
            icon: <GrFormNext />,
        },
        {
            onClick: () => setPageHandler(totalPages),
            disabled: currentPage === totalPages,
            icon: <MdOutlineLastPage />,
        },
    ];

    return (
        <StyledPaginationContainer>
            <StyledActionButtonsContainer>
                {buttons.map((button, index) => (
                    <PaginationButton key={index} onClick={button.onClick} disabled={button.disabled}>
                        {button.icon}
                    </PaginationButton>
                ))}
            </StyledActionButtonsContainer>
            <StyledPageInformation>
                Page {currentPage} of {totalPages}
            </StyledPageInformation>
            <ItemsPerPageSelector />
        </StyledPaginationContainer>
    );
}

export default Pagination;
