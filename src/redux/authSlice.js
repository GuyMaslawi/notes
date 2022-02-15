import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loader: false,
    user: localStorage.getItem('user')
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', action.payload.payload.user.id);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.payload.user.id
            }
        },
        setAuthFail: (state, action) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        },
    }
});

export const {setAuthSuccess, setAuthFail} = authSlice.actions;

export default authSlice.reducer;
