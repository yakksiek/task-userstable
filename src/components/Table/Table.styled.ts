import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
    border: var(--border);
    padding: 1rem;
    border-radius: var(--border-radius-outer);
    background-color: var(--background-color-main);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
`;

export const StyledScrollableContainer = styled.div`
    overflow-x: auto;
    margin-top: 1rem;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    td {
        min-width: 200px;
    }

    td,
    th {
        text-align: left;
        padding: 8px;
    }
`;

export const StyledResultMessage = styled.p`
    margin-top: 1rem;
`;
