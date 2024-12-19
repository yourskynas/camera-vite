import { NameSpace } from '../../constants';
import { Selector } from '../types';

export const selectDirection = (state: Selector) => state[NameSpace.Main].direction;

export const selectSortType = (state: Selector) => state[NameSpace.Main].sortType;

export const selectShoppingCart = (state: Selector) => state[NameSpace.Main].shoppingCart;

export const selectIsContinue = (state: Selector) => state[NameSpace.Main].isContinue;
