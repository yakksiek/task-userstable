import * as t from '../../types';
import users from '../../data/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StateUsers {
    userList: t.User[];
}

const initialState: StateUsers = {
    userList: users,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<t.User[]>) => {
            state.userList = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
