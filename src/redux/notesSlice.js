import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MODAL_TYPE} from "../constants/index";
import api from "../axios/api";

const initialState = {
    list: [],
    currentNote: {},
    isModalOpen: false,
    loading: false,
    modalType: MODAL_TYPE.ADD,
};

export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async (userId) => {
        const response = await api.get(`notes/byUser/${userId}`);
        return response.data;
    }
);

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
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
            state.currentNote = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchNotes.rejected, (state) => {
                state.loading = false;
            })
    },
});

export const {deleteNote, handleModal, setCurrentNote} = notesSlice.actions;

export default notesSlice.reducer;
