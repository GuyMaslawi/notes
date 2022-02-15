import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    errors: null,
    success: null,
};

export const errorsSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        resetMessages: state => {
            state.errors = null;
            state.success = null;
        },
        setSuccess: (state, action) => {
            state.success = action.payload;
        }
    },
});

export const {setErrors, setSuccess, resetMessages} = errorsSlice.actions;

export default errorsSlice.reducer;
