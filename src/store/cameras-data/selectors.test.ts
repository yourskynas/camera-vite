import { NameSpace } from '../../constants';
import { camera } from '../../mocks/camera';
import { cameras } from '../../mocks/cameras';
import { promo } from '../../mocks/promo';
import { reviews } from '../../mocks/reviews';
import { selectCamera, selectCameras, selectIsCameraDataLoading, selectIsCameraError, selectIsCamerasDataLoading, selectIsCamerasError, selectPromo, selectReviews, selectSimilar } from './selectors';

describe('CamerasData selectors', () => {
  const state = {
    [NameSpace.Data]: {
      cameras: cameras,
      camera: camera,
      reviews: reviews,
      similar: cameras,
      promo: promo,
      isCamerasDataLoading: true,
      isCamerasError: false,
      isCameraDataLoading: false,
      isCameraError: true,
    }
  };

  it('should return "cameras" array from state', () => {
    const { cameras: camerasState } = state[NameSpace.Data];
    const result = selectCameras(state);
    expect(result).toEqual(camerasState);
  });

  it('should return "camera" object from state', () => {
    const { camera: cameraState } = state[NameSpace.Data];
    const result = selectCamera(state);
    expect(result).toEqual(cameraState);
  });

  it('should return "reviews" array from state', () => {
    const { reviews: reviewsState } = state[NameSpace.Data];
    const result = selectReviews(state);
    expect(result).toEqual(reviewsState);
  });

  it('should return "similar" array from state', () => {
    const { similar: similarState } = state[NameSpace.Data];
    const result = selectSimilar(state);
    expect(result).toEqual(similarState);
  });

  it('should return "promo" array from state', () => {
    const { promo: promoState } = state[NameSpace.Data];
    const result = selectPromo(state);
    expect(result).toEqual(promoState);
  });

  it('should return cameras data loading status from state', () => {
    const { isCamerasDataLoading } = state[NameSpace.Data];
    const result = selectIsCamerasDataLoading(state);
    expect(result).toEqual(isCamerasDataLoading);
  });

  it('should return cameras error status from state', () => {
    const { isCamerasError } = state[NameSpace.Data];
    const result = selectIsCamerasError(state);
    expect(result).toEqual(isCamerasError);
  });

  it('should return camera data loading status from state', () => {
    const { isCameraDataLoading } = state[NameSpace.Data];
    const result = selectIsCameraDataLoading(state);
    expect(result).toEqual(isCameraDataLoading);
  });

  it('should return camera error status from state', () => {
    const { isCameraError } = state[NameSpace.Data];
    const result = selectIsCameraError(state);
    expect(result).toEqual(isCameraError);
  });
});
