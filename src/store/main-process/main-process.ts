import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Direction, NameSpace, SortType } from '../../constants';

type MainState = {
  sortType: string;
  direction: string;
}

const initialState: MainState = {
  sortType: SortType.ByPrice,
  direction: Direction.Up,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    changeDirection: (state, action: PayloadAction<string>) => {
      state.direction = action.payload;
    }
  }
});
export const { changeSortType, changeDirection } = mainProcess.actions;
