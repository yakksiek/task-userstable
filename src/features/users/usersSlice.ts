import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';
import axios from 'axios';
import * as t from '../../types';

interface StateUsers {
    userList: t.User[];
    fetching: boolean;
    error: string | null;
}

const initialState: StateUsers = {
    userList: [],
    fetching: false,
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async function () {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Failed to fetch users');
        } else {
            throw new Error('An unknown error occurred');
        }
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<t.User[]>) => {
            state.userList = action.payload;
            state.fetching = false;
        },
        fetching: state => {
            state.fetching = true;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.fetching = false;
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.error = null;
                state.fetching = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.fetching = false;
                state.error = null;
                state.userList = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.fetching = false;
                state.error = action.error.message || null;
            });
    },
});

export default usersSlice.reducer;
