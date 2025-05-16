// redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import commonReducer from './common/commonSlice';

const rootReducer = combineReducers({
  common: commonReducer, // The key 'common' will be the name in your state
});

export default rootReducer;