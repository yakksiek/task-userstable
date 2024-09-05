import { styled } from 'styled-components';

const StyledPaginationButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    color: var(--font-color-accent);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    transition: color 0.3s ease;

    &:disabled {
        visibility: hidden;
        pointer-events: none;
    }

    &:hover {
        color: var(--font-color-main);
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
