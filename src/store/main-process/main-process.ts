import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Direction, NameSpace, SortType } from '../../constants';

type MainState = {
  sortType: string;
  direction: string;
  shoppingCart: number[];
  isContinue: boolean;
}

const initialState: MainState = {
  sortType: SortType.ByPrice,
  direction: Direction.Up,
  shoppingCart: [],
  isContinue: false,
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
    },
    addToCart: (state, action: PayloadAction<number>) => {
      state.shoppingCart.push(action.payload);
    },
    changeIsContinue: (state, action: PayloadAction<boolean>) => {
      state.isContinue = action.payload;
    }
  }
});
export const { changeSortType, changeDirection, addToCart, changeIsContinue } = mainProcess.actions;
