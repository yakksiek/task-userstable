import { styled } from 'styled-components';
import { setFilter } from '../../features/filters/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import * as t from '../../types';
import { setPage } from '../../features/users/usersSlice';

const StyledInput = styled.input`
    background-color: var(--background-color-main-2);
    border: 1px solid var(--background-color-main-2);
    min-height: 2rem;
    width: 100%;
    font-size: 0.875rem;
    padding: 0.5rem;
    color: var(--font-color-main);
    outline: none;
    border-radius: var(--border-radius-outer);

    &:focus {
        border-color: var(--font-color-accent);
    }
`;

interface InputProps {
    filterKey: keyof t.StateFilters;
    placeholder: string;
}

function Input({ filterKey, placeholder }: InputProps) {
    const dispatch = useAppDispatch();
    const value = useAppSelector(state => state.filters[filterKey]);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setFilter({ query: e.target.value, filterKey }));
        dispatch(setPage(1));
    }

    return <StyledInput type='text' placeholder={placeholder} onChange={handleInputChange} value={value} />;
}

export default Input;
