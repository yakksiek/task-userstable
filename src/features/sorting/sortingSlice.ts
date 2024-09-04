import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as t from '../../types';

interface StateSorting {
    column: keyof t.SimpleUser;
    order: 'asc' | 'desc';
}

const initialState: StateSorting = {
    column: 'id',
    order: 'asc',
};

const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSorting: (state, action: PayloadAction<StateSorting>) => {
            state.column = action.payload.column;
            state.order = action.payload.order;
        },
    },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
