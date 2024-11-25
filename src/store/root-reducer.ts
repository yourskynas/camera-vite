import { combineReducers } from '@reduxjs/toolkit';
import { camerasData } from './cameras-data/cameras-data';
import { NameSpace } from '../constants';
import { mainProcess } from './main-process/main-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: camerasData.reducer,
  [NameSpace.Main]: mainProcess.reducer,
});
