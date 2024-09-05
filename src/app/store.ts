import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import ageSlice from '../features/counter/ageSlice';


export default configureStore({
  reducer: {
    counter: counterSlice,
    age: ageSlice
  },
});