import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    list: []
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare({ name, phone, email, tags, notes }) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
            email,
            tags,
            notes,
            lastInteraction: new Date().toISOString(),
          }
        }
      }
    },
    updateContact(state, action) {
      const index = state.list.findIndex(c => c.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteContact(state, action) {
      state.list = state.list.filter(c => c.id !== action.payload);
    },
    touchContact(state, action) {
      const contact = state.list.find(c => c.id === action.payload);
      if (contact) {
        contact.lastInteraction = new Date().toISOString();
      }
    }
  }
});

export const { addContact, updateContact, deleteContact, touchContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
