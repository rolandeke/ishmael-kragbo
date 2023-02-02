import { createSlice } from '@reduxjs/toolkit';
import { jewelries } from '../jewelry';

const initialState = {
  data: jewelries,
}

export const counterSlice = createSlice({
  name: 'jewelry',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer