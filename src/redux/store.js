import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import authReducer from "./authSlice";
import errorsReducer from "./errorsSlice";

export default configureStore({
    reducer: {
        notes: notesReducer,
        auth: authReducer,
        errors: errorsReducer
    },
});
