import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, phone }) {
        return { payload: { id: nanoid(), name, phone } };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
