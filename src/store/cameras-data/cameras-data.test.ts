import { camera } from '../../mocks/camera';
import { cameras } from '../../mocks/cameras';
import { promo } from '../../mocks/promo';
import { reviews } from '../../mocks/reviews';
import { fetchCameraAction, fetchCamerasAction, fetchPromoAction, fetchReviewsAction, fetchSimilarAction } from '../api-actions';
import { camerasData } from './cameras-data';

describe('CamerasData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
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

    const result = camerasData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
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

    const result = camerasData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCamerasDataLoading" to "true" with "fetchCamerasAction.pending"', () => {
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: [],
      similar: [],
      promo: [],
      isCamerasDataLoading: true,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: false,
    };

    const result = camerasData.reducer(undefined, fetchCamerasAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCameraError" to "true" with "fetchCamerasAction.rejected"', () => {
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: [],
      similar: [],
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: true,
      isCameraDataLoading: false,
      isCameraError: false
    };

    const result = camerasData.reducer(undefined, fetchCamerasAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "cameras" to array with cameras, "isCamerasDataLoading" to "false" with "fetchCamerasAction.fulfilled"', () => {
    const mockCameras = cameras;
    const expectedState = {
      cameras: mockCameras,
      camera: null,
      reviews: [],
      similar: [],
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: false,
    };

    const result = camerasData.reducer(
      undefined,
      fetchCamerasAction.fulfilled(
        mockCameras, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "isCameraDataLoading" to "true" with "fetchCameraAction.pending"', () => {
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: [],
      similar: [],
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: true,
      isCameraError: false,
    };

    const result = camerasData.reducer(undefined, fetchCameraAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCameraError" to "true" with "fetchCameraAction.rejected"', () => {
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: [],
      similar: [],
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: true,
    };

    const result = camerasData.reducer(undefined, fetchCameraAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "camera" to object with camera, "isCameraDataLoading" to "false" with "fetchCameraAction.fulfilled"', () => {
    const mockCamera = camera;
    const expectedState = {
      cameras: [],
      camera: mockCamera,
      reviews: [],
      similar: [],
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: false,
    };

    const result = camerasData.reducer(
      undefined,
      fetchCameraAction.fulfilled(
        mockCamera, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to array with reviews, with "fetchReviewsAction.fulfilled"', () => {
    const mockReviews = reviews;
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: mockReviews,
      similar: [],
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: false,
    };

    const result = camerasData.reducer(
      undefined,
      fetchReviewsAction.fulfilled(
        mockReviews, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "similar" to array with similar, with "fetchSimilarAction.fulfilled"', () => {
    const mockSimilar = cameras;
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: [],
      similar: mockSimilar,
      promo: [],
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: false,
    };

    const result = camerasData.reducer(
      undefined,
      fetchSimilarAction.fulfilled(
        mockSimilar, '', '')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "promo" to array with promo, with "fetchPromoAction.fulfilled"', () => {
    const mockPromo = promo;
    const expectedState = {
      cameras: [],
      camera: null,
      reviews: [],
      similar: [],
      promo: mockPromo,
      isCamerasDataLoading: false,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: false,
    };

    const result = camerasData.reducer(
      undefined,
      fetchPromoAction.fulfilled(
        mockPromo, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});
