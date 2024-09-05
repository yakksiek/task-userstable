import { styled } from 'styled-components';
import { setFilter } from '../../features/filters/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import * as t from '../../types';
import { setPage } from '../../features/users/usersSlice';

const StyledInput = styled.input`
    background-color: transparent;
    border: 1px solid var(--font-color-main);
    min-height: 2rem;
    width: 100%;
    font-size: 0.75rem;
    padding: 0.5rem;
    color: var(--font-color-accent);
    outline: none;
    border-radius: 0.5rem;

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
