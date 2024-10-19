import { NameSpace } from '../../constants';
import { Selector } from '../types';

export const selectCameras = (state: Selector) => state[NameSpace.Data].cameras;

export const selectIsCamerasDataLoading = (state: Selector) => state[NameSpace.Data].isCamerasDataLoading;

export const selectIsCamerasError = (state: Selector) => state[NameSpace.Data].isCamerasError;

export const selectCamera = (state: Selector) => state[NameSpace.Data].camera;

export const selectIsCameraDataLoading = (state: Selector) => state[NameSpace.Data].isCameraDataLoading;

export const selectIsCameraError = (state: Selector) => state[NameSpace.Data].isCameraError;

export const selectSimilar = (state: Selector) => state[NameSpace.Data].similar;

export const selectReviews = (state: Selector) => state[NameSpace.Data].reviews;

export const selectPromo = (state: Selector) => state[NameSpace.Data].promo;
