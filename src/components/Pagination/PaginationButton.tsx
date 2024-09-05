import { styled } from 'styled-components';

const StyledPaginationButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1rem;
    color: var(--font-color-accent);
    cursor: pointer;

    &:disabled {
        visibility: hidden;
        pointer-events: none;
    }
`;

interface PaginationButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
}

function PaginationButton({ children, disabled, onClick }: PaginationButtonProps) {
    return (
        <StyledPaginationButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledPaginationButton>
    );
}

export default PaginationButton;
