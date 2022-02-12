import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer
  },
});
