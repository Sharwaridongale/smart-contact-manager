import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: false,
    modalOpen: false,
    selectedContact: null,
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
    }
  }
});

export const { toggleTheme, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
