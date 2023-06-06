import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
interface State {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Define the initial state using that type
const initialState: State[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'jd@example.com',
    phone: '+55 (11) 99999-9999',
  },
];

export const counterSlice = createSlice({
  name: 'contacts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<State>) => {
      state.push(action.payload);
    },
  },
});

export const { addContact } = counterSlice.actions;

export const selectContactsList = (state: RootState) => state.contacts;

export default counterSlice.reducer;
