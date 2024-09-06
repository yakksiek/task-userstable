import { styled } from 'styled-components';

const StyledPaginationButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    color: var(--font-color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    transition: color 0.3s ease;

    &:hover {
        color: var(--font-color-main);
        cursor: pointer;
    }

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
    console.log(disabled);
    return (
        <StyledPaginationButton onClick={onClick} disabled={disabled}>
            {children}
        </StyledPaginationButton>
    );
}

export default PaginationButton;
