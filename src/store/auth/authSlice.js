import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        password: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated', 
            state.email = payload.email;
            state.errorMessage = null;
        },
        logout: (state, {payload}) => { 
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.password = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkAuth: (state) => {
            state.status = 'checking';
        }
    }
})

export const { login, logout, checkAuth } = authSlice.actions;