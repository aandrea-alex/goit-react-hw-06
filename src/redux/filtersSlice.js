import { createSlice } from '@reduxjs/toolkit';
import { FILTERS_SLISE, defaultFiltersState } from './constants';

const filtersSlice = createSlice({
  name: FILTERS_SLISE,
  initialState: defaultFiltersState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
