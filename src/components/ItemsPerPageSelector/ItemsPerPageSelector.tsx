import { styled } from 'styled-components';
import { setItemsPerPage } from '../../features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

const ITEMS_PER_PAGE_OPTIONS = [3, 5, 10];

const StyledSelect = styled.select`
    border: 1px solid var(--font-color-accent);
    border-radius: 100vh;
    background-color: transparent;
    color: var(--font-color-accent);
`;

const ItemsPerPageSelector = () => {
    const dispatch = useAppDispatch();
    const itemsPerPage = useAppSelector(store => store.usersData.itemsPerPage);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setItemsPerPage(Number(e.target.value)));
    };

    return (
        <div>
            <label htmlFor='itemsPerPage'>Items per page: </label>
            <StyledSelect id='itemsPerPage' value={itemsPerPage} onChange={handleChange}>
                {ITEMS_PER_PAGE_OPTIONS.map(optionItem => (
                    <option key={optionItem} value={optionItem}>
                        {optionItem}
                    </option>
                ))}
            </StyledSelect>
        </div>
    );
};

export default ItemsPerPageSelector;
