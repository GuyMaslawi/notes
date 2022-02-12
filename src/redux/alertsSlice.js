import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  alert: {
    id: "",
    type: "",
    msg: "",
  },
};

export const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      const id = uuid();
      const { type, msg } = action;

      return {
        ...state.alert,
        alert: { id, type, msg },
      };
    },
  },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
