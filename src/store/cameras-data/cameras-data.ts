import { createSlice } from '@reduxjs/toolkit';
import { CameraType, PromoType, ReviewType } from '../../types';
import { fetchCameraAction, fetchCamerasAction, fetchPromoAction, fetchReviewsAction, fetchSimilarAction } from '../api-actions';
import { NameSpace } from '../../constants';

type CamerasData = {
  cameras: CameraType[];
  camera: CameraType | null;
  reviews: ReviewType[];
  similar: CameraType[];
  promo: PromoType[];
  isCamerasDataLoading: boolean;
  isCamerasError: boolean;
  isCameraDataLoading: boolean;
  isCameraError: boolean;
};

const initialState: CamerasData = {
  cameras: [],
  camera: null,
  reviews: [],
  similar: [],
  promo: [],
  isCamerasDataLoading: false,
  isCamerasError: false,
  isCameraDataLoading: false,
  isCameraError: false,
};

export const camerasData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isCamerasDataLoading = true;
        state.isCamerasError = false;
      })
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.isCamerasDataLoading = false;
        state.isCamerasError = true;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.isCamerasDataLoading = false;
      })
      .addCase(fetchCameraAction.pending, (state) => {
        state.isCameraDataLoading = true;
        state.isCameraError = false;
      })
      .addCase(fetchCameraAction.rejected, (state) => {
        state.isCameraDataLoading = false;
        state.isCameraError = true;
      })
      .addCase(fetchCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isCameraDataLoading = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchSimilarAction.fulfilled, (state, action) => {
        state.similar = action.payload;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  }
});
