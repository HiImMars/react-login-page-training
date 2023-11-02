import { combineReducers } from '@reduxjs/toolkit';
import { loginFormReducer } from './loginForm/loginFormSlice';

export const reducer = combineReducers({
  login: loginFormReducer,
});

// for the future improvements and to train structure of the react project with redux toolkit
