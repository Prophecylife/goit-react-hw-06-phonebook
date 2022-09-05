import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: state => {},
    deleteContact: state => {},
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
