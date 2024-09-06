import styled from 'styled-components';

export const StyledScrollableContainer = styled.div`
    overflow-x: auto;
    margin-top: 1rem;
    overflow-y: hidden;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
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
        padding: var(--cell-inner-padding);
    }
`;

export const StyledResultMessage = styled.p`
    margin-top: 1rem;
`;
