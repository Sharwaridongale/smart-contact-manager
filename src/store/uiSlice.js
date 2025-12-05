import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: false,
    modalOpen: false,
    selectedContact: null,
    searchTerm: ""  // <-- add this
  },
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    },
    openModal(state, action) {
      state.modalOpen = true;
      state.selectedContact = action.payload || null;
    },
    closeModal(state) {
      state.modalOpen = false;
      state.selectedContact = null;
    },
    setSearchTerm(state, action) {  // <-- add this reducer
      state.searchTerm = action.payload;
    }
  }
});

export const { toggleTheme, openModal, closeModal, setSearchTerm } = uiSlice.actions;
export default uiSlice.reducer;
