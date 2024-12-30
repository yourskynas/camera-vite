import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Direction, NameSpace, SortType } from '../../constants';
import { CameraType } from '../../types';
import { ChangedQuanity } from '../types';

type MainState = {
  sortType: string;
  direction: string;
  shoppingCart: CameraType[];
  isContinue: boolean;
  isClearCart: boolean;
  isAddToCart: boolean;
  isPostSuccess: boolean;
  isError: boolean;
}

const initialState: MainState = {
  sortType: SortType.ByPrice,
  direction: Direction.Up,
  shoppingCart: [],
  isContinue: false,
  isClearCart: false,
  isAddToCart: false,
  isPostSuccess: false,
  isError: false,
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
    removeFromCart: (state, action: PayloadAction<number>) => {
      let found = false;
      state.shoppingCart = state.shoppingCart.filter((item) => {
        if (item.id === action.payload && !found) {
          found = true;
          return false;
        }
        return true;
      });
    },
    updateCameraQuanity: (state, action: PayloadAction<ChangedQuanity>) => {
      const otherCameras = state.shoppingCart.filter((item) => item.id !== action.payload.id);
      const cameraToUpdate = state.shoppingCart.filter((item) => item.id === action.payload.id);
      if (cameraToUpdate.length === 0) {
        state.shoppingCart = otherCameras;
      }
      const updatedCameras: CameraType[] = [];
      for (let i = 0; i < action.payload.targetQuanity; i++) {
        updatedCameras.push({...cameraToUpdate[0]});
      }
      state.shoppingCart = [...otherCameras, ...updatedCameras];
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
    },
    emptyBasket: (state) => {
      state.shoppingCart = [];
    },
    setPostStatus: (state, action: PayloadAction<boolean>) => {
      state.isPostSuccess = action.payload;
    },
    setErrorStatus: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    }
  }
});
export const { changeSortType, changeDirection, addToCart, removeFromCart, updateCameraQuanity, changeIsAddToCart, changeIsContinue, clearCart, changeIsClearCart, emptyBasket, setPostStatus, setErrorStatus } = mainProcess.actions;
