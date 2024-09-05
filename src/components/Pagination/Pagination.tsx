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
    margin-top: 0.5rem;
    justify-content: space-between;

    font-size: 0.875rem;
`;

const StyledActionButtonsContainer = styled.div`
    display: flex;
    gap: 0.25rem;
`;

function Pagination({ currentPage, totalPages, onNextPage, onPreviousPage, setPageHandler }: PaginationProps) {
    return (
        <StyledPaginationContainer>
            <StyledActionButtonsContainer>
                <PaginationButton onClick={() => setPageHandler(1)} disabled={currentPage === 1}>
                    <MdOutlineFirstPage />
                </PaginationButton>
                <PaginationButton onClick={onPreviousPage} disabled={currentPage === 1}>
                    <GrFormPrevious />
                </PaginationButton>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <PaginationButton onClick={onNextPage} disabled={currentPage === totalPages}>
                    <GrFormNext />
                </PaginationButton>
                <PaginationButton onClick={() => setPageHandler(totalPages)} disabled={currentPage === totalPages}>
                    <MdOutlineLastPage />
                </PaginationButton>
            </StyledActionButtonsContainer>
            <ItemsPerPageSelector />
        </StyledPaginationContainer>
    );
}

export default Pagination;
