import {createSlice} from "@reduxjs/toolkit";
import {MODAL_TYPE} from "../constants/index";

const initialState = {
    list: [],
    currentNote: {},
    isModalOpen: false,
    modalType: MODAL_TYPE.ADD
};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const id = state.list.length + 1;
            const {title, description} = action.payload;
            state.list.push({id, title, description});
        },
        deleteItem: (state, action) => {
            state.list = state.list.filter(i => i.id !== action.payload);
            state.currentNote = {}
            return state;
        },
        editItem: (state, action) => {
            const {id, title, description} = action.payload;
            const index = id - 1;
            state.list[index].title = title;
            state.list[index].description = description;
        },
        handleModal: (state, action) => {
            if (!action.payload) {
                state.isModalOpen = false;
            } else {
                state.modalType = action.payload;
                state.isModalOpen = true;
            }
            return state;
        },
        setCurrentNote: (state, action) => {
            state.currentNote = state.list.find(i => i.id === action.payload.id);
        }
    },
});

export const {addItem, deleteItem, editItem, handleModal, setCurrentNote} = notesSlice.actions;

export default notesSlice.reducer;
