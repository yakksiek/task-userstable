import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import filtersReducer from '../features/filters/filtersSlice';
import sortingReducer from '../features/sorting/sortingSlice';

const rootReducer = combineReducers({
    usersData: usersReducer,
    filters: filtersReducer,
    sorting: sortingReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
