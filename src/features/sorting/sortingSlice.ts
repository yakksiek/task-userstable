import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as t from '../../types';

interface StateSorting {
    column: keyof t.SimpleUser;
    order: 'asc' | 'desc';
}

const initialState: StateSorting = {
    column: 'name',
    order: 'asc',
};

const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSorting: (state, action: PayloadAction<StateSorting>) => {
            const { column: newColumn, order: newOrder } = action.payload;

            if (newColumn === state.column) {
                state.order = newOrder;
            } else {
                state.order = 'asc';
            }

            state.column = newColumn;
        },
    },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
