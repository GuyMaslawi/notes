import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      title: "title",
      description: "description",
    },
  ],
  isModalOpen: false
};

function findMaxId(arr) {
  if (arr.length) {
    const ids = arr.map((object) => object.id);
    const max = Math.max(...ids);
    return max;
  }
  return 1;
}

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const id = findMaxId(state.list);
      const { title, description } = action.payload;
      state.list.push({ id, title, description });
    },
    deleteItem: (state, action) => {
      return state.list.filter((i) => i.id !== action.payload);
    },
    editItem: (state, action) => {},
    openModal: state => state.isModalOpen
  },
});

export const { addItem, deleteItem, editItem, openModal } = notesSlice.actions;

export default notesSlice.reducer;
