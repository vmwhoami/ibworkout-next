// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Redux Toolkit includes thunk middleware by default
  // and sets up the Redux DevTools extension automatically
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {}, // equivalent to the previous initialState
});

export default store;