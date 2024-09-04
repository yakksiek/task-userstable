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

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;
