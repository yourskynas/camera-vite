import { createSlice } from '@reduxjs/toolkit';
import { CameraType, ReviewType } from '../../types';
import { fetchCameraAction, fetchCamerasAction, fetchReviewsAction, fetchSimilarAction } from '../api-actions';
import { NameSpace } from '../../constants';

type CamerasData = {
  cameras: CameraType[];
  camera: CameraType | null;
  reviews: ReviewType[];
  similar: CameraType[];
  isCamerasDataLoading: boolean;
  isCamerasError: boolean;
  isCameraDataLoading: boolean;
  isCameraError: boolean;
  isReviewsDataLoading: boolean;
  isReviewsError: boolean;
  isSimilarDataLoading: boolean;
  isSimilarError: boolean;
};

const initialState: CamerasData = {
  cameras: [],
  camera: null,
  reviews: [],
  similar: [],
  isCamerasDataLoading: false,
  isCamerasError: false,
  isCameraDataLoading: false,
  isCameraError: false,
  isReviewsDataLoading: false,
  isReviewsError: false,
  isSimilarDataLoading: false,
  isSimilarError: false,
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
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
        state.isReviewsError = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
        state.isReviewsError = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchSimilarAction.pending, (state) => {
        state.isSimilarDataLoading = true;
        state.isSimilarError = false;
      })
      .addCase(fetchSimilarAction.rejected, (state) => {
        state.isSimilarDataLoading = false;
        state.isSimilarError = true;
      })
      .addCase(fetchSimilarAction.fulfilled, (state, action) => {
        state.similar = action.payload;
        state.isSimilarDataLoading = false;
      });
  }
});
