import { createSlice } from '@reduxjs/toolkit';
import { loginFormInitialState } from './loginFormInitialState';

export const loginFormSlice = createSlice({
  name: 'login',
  initialState: loginFormInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const loginFormReducer = loginFormSlice.reducer;
export const { setName, setEmail, setPassword } = loginFormSlice.actions;
