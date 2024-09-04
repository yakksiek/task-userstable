import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as t from '../../types';

const initialState: t.StateFilters = {
    name: '',
    username: '',
    email: '',
    phone: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<{ query: string; filterKey: keyof t.StateFilters }>) => {
            const { query, filterKey } = action.payload;
            state[filterKey] = query;
        },
    },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
