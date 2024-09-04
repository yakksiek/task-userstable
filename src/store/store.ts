import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import filtersReducer from '../features/filters/filtersSlice';
import sortingReducer from '../features/sorting/sortingSlice';

const store = configureStore({
    reducer: {
        usersData: usersReducer,
        filters: filtersReducer,
        sorting: sortingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
