import { NameSpace } from '../../constants';
import { Selector } from '../types';

export const selectDirection = (state: Selector) => state[NameSpace.Main].direction;

export const selectSortType = (state: Selector) => state[NameSpace.Main].sortType;

export const selectShoppingCart = (state: Selector) => state[NameSpace.Main].shoppingCart;

export const selectIsContinue = (state: Selector) => state[NameSpace.Main].isContinue;

export const selectIsClearCart = (state: Selector) => state[NameSpace.Main].isClearCart;

export const selectIsAddToCart = (state: Selector) => state[NameSpace.Main].isAddToCart;

export const selectIsPostSuccess = (state: Selector) => state[NameSpace.Main].isPostSuccess;

export const selectIsError = (state: Selector) => state[NameSpace.Main].isError;
