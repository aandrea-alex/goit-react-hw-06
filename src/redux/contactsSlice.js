import { createSlice, nanoid } from '@reduxjs/toolkit';
import { CONTACTS_SLICE, defaultContactsState } from './constants';

const contactsSlice = createSlice({
  name: CONTACTS_SLICE,
  initialState: defaultContactsState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },
    deleteItem(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = contactsSlice.actions;
export const itemsReducer = contactsSlice.reducer;
