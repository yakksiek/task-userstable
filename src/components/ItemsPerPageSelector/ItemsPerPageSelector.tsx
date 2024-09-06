import { styled } from 'styled-components';
import { setItemsPerPage } from '../../features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const ITEMS_PER_PAGE_OPTIONS = [3, 5, 10];

const StyledWrapper = styled.div`
    color: var(--font-color-accent);
`;

const StyledSelect = styled.select`
    border: 1px solid var(--font-color-accent);
    border-radius: 100vh;
    background-color: var(--background-color-main);
    color: var(--font-color-accent);
    transition: olor 0.3s ease, border-color 0.3s ease;
    padding-right: 0.25rem;

    &:hover {
        cursor: pointer;
        color: var(--font-color-main);
        border-color: var(--font-color-main);
    }
`;

const ItemsPerPageSelector = () => {
    const dispatch = useAppDispatch();
    const itemsPerPage = useAppSelector(store => store.usersData.itemsPerPage);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setItemsPerPage(Number(e.target.value)));
    };

    return (
        <StyledWrapper>
            <label htmlFor='itemsPerPage'>Items per page: </label>
            <StyledSelect id='itemsPerPage' value={itemsPerPage} onChange={handleChange}>
                {ITEMS_PER_PAGE_OPTIONS.map(optionItem => (
                    <option key={optionItem} value={optionItem}>
                        {optionItem}
                    </option>
                ))}
            </StyledSelect>
        </StyledWrapper>
    );
};

export default ItemsPerPageSelector;
