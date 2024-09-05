import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: 'age',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      
      state.value += action.payload;
    }
  }
})

export const { increment, decrement, incrementByAmount } = ageSlice.actions;
export default ageSlice.reducer