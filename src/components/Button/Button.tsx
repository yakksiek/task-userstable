import { styled } from 'styled-components';

interface ButtonProps {
    clickHandler: () => void;
    children: React.ReactNode;
    disabled?: boolean;
}

const StyledButton = styled.button`
    background-color: var(--background-color-main);
    border: 1px solid var(--font-color-accent);
    color: var(--font-color);
    padding: 0.5rem 1rem;
    border-radius: 100vh;

    &:hover {
        cursor: pointer;
        background-color: var(--font-color-accent);
        color: var(--background-color-main);
    }

    &:disabled {
        background-color: var(--background-color-main-2);
        pointer-events: none;
    }
`;

function Button({ clickHandler, children, disabled = false }: ButtonProps) {
    console.log(disabled);

    return (
        <StyledButton onClick={clickHandler} disabled={disabled}>
            {children}
        </StyledButton>
    );
}

export default Button;
