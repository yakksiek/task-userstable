import styled from 'styled-components';

export const StyledScrollableContainer = styled.div`
    overflow-x: auto;
    margin-top: 1rem;
`;

export const StyledTable = styled.table`
    min-width: 800px;
    border-collapse: collapse;

    td,
    th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
`;
