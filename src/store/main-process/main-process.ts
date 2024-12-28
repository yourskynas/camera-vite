import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Direction, NameSpace, SortType } from '../../constants';
import { CameraType } from '../../types';

type MainState = {
  sortType: string;
  direction: string;
  shoppingCart: CameraType[];
  isContinue: boolean;
  isClearCart: boolean;
  isAddToCart: boolean;
}

const initialState: MainState = {
  sortType: SortType.ByPrice,
  direction: Direction.Up,
  shoppingCart: [],
  isContinue: false,
  isClearCart: false,
  isAddToCart: false,
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
    addToCart: (state, action: PayloadAction<CameraType>) => {
      state.shoppingCart.push(action.payload);
    },
    changeIsAddToCart: (state, action: PayloadAction<boolean>) => {
      state.isAddToCart = action.payload;
    },
    changeIsContinue: (state, action: PayloadAction<boolean>) => {
      state.isContinue = action.payload;
    },
    clearCart: (state, action: PayloadAction<number>) => {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== action.payload);
    },
    changeIsClearCart: (state, action: PayloadAction<boolean>) => {
      state.isClearCart = action.payload;
    }
  }
});
export const { changeSortType, changeDirection, addToCart, changeIsAddToCart, changeIsContinue, clearCart, changeIsClearCart } = mainProcess.actions;
