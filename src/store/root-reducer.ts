import { combineReducers } from '@reduxjs/toolkit';
import { camerasData } from './cameras-data/cameras-data';
import { NameSpace } from '../constants';

export const rootReducer = combineReducers({
  [NameSpace.Data]: camerasData.reducer,
});
