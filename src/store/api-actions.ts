import { createAsyncThunk } from '@reduxjs/toolkit';
import { CameraType, OrderType, PromoType, ReviewType } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { AppDispatch, State } from './types';

export const fetchCamerasAction = createAsyncThunk<CameraType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameras',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CameraType[]>(APIRoute.Cameras);
    return data;
  },
);

export const fetchCameraAction = createAsyncThunk<CameraType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCamera',
  async (cameraId, {extra: api}) => {
    const {data} = await api.get<CameraType>(`${APIRoute.Cameras}/${cameraId}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (cameraId, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Cameras}/${cameraId}${APIRoute.Reviews}`);
    return data;
  },
);

export const fetchSimilarAction = createAsyncThunk<CameraType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilar',
  async (cameraId, {extra: api}) => {
    const {data} = await api.get<CameraType[]>(`${APIRoute.Cameras}/${cameraId}${APIRoute.Similar}`);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<PromoType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PromoType[]>(APIRoute.Promo);
    return data;
  },
);

export const orderAction = createAsyncThunk<void, OrderType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/order',
  async ({camerasIds, coupon}: OrderType, {extra: api}) => {
    await api.post(APIRoute.Order, {camerasIds, coupon});
  },
);
