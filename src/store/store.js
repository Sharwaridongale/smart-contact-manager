import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import uiReducer from "./uiSlice";
import { loadState, saveState } from "./localStorage";

const persisted = loadState();

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    ui: uiReducer,
  },
  preloadedState: persisted,
});

store.subscribe(() => {
  saveState({
    contacts: store.getState().contacts
  });
});

export default store;
