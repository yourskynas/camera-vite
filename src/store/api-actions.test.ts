import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { State } from './types';
import { AppThunkDispatch, extractActionsTypes } from '../mocks/mocks';
import { APIRoute } from '../constants';
import { fetchCameraAction, fetchCamerasAction, fetchPromoAction, fetchReviewsAction, fetchSimilarAction, orderAction } from './api-actions';
import { cameras } from '../mocks/cameras';
import { camera } from '../mocks/camera';
import { reviews } from '../mocks/reviews';
import { promo } from '../mocks/promo';
import { OrderType } from '../types';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ DATA: { cameras: [] }});
  });

  describe('fetchCamerasAction', () => {
    it('should dispatch "fetchCamerasAction.pending" and "fetchCamerasAction.fulfilled" when server response 200', async () => {
      const mockCameras = cameras;
      mockAxiosAdapter.onGet(APIRoute.Cameras).reply(200, mockCameras);

      await store.dispatch(fetchCamerasAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCamerasActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCamerasAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.fulfilled.type,
      ]);

      expect(fetchCamerasActionFulfilled.payload)
        .toEqual(mockCameras);
    });

    it('should dispatch "fetchCamerasAction.pending" and "fetchCamerasAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Cameras).reply(400);

      await store.dispatch(fetchCamerasAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCamerasAction.pending.type,
        fetchCamerasAction.rejected.type,
      ]);
    });
  });

  describe('fetchCameraAction', () => {
    it('should dispatch "fetchCameraAction.pending" and "fetchCameraAction.fulfilled" when server response 200', async () => {
      const mockCamera = camera;
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${'id'}`).reply(200, mockCamera);

      await store.dispatch(fetchCameraAction('id'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCameraActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCameraAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCameraAction.pending.type,
        fetchCameraAction.fulfilled.type,
      ]);

      expect(fetchCameraActionFulfilled.payload)
        .toEqual(mockCamera);
    });

    it('should dispatch "fetchCamerasAction.pending" and "fetchCamerasAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${'id'}`).reply(400);

      await store.dispatch(fetchCameraAction('id'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCameraAction.pending.type,
        fetchCameraAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.fulfilled" when server response 200', async () => {
      const mockReviews = reviews;
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${'id'}${APIRoute.Reviews}`).reply(200, mockReviews);

      await store.dispatch(fetchReviewsAction('id'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchReviewsActionFulfilled.payload)
        .toEqual(mockReviews);
    });

    it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${'id'}${APIRoute.Reviews}`).reply(400);

      await store.dispatch(fetchReviewsAction('id'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });

  describe('fetchSimilarAction', () => {
    it('should dispatch "fetchSimilarAction.pending" and "fetchSimilarAction.fulfilled" when server response 200', async () => {
      const mockSimilar = cameras;
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${'id'}${APIRoute.Similar}`).reply(200, mockSimilar);

      await store.dispatch(fetchSimilarAction('id'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSimilarActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchSimilarAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchSimilarAction.pending.type,
        fetchSimilarAction.fulfilled.type,
      ]);

      expect(fetchSimilarActionFulfilled.payload)
        .toEqual(mockSimilar);
    });

    it('should dispatch "fetchSimilarAction.pending" and "fetchSimilarAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(`${APIRoute.Cameras}/${'id'}${APIRoute.Similar}`).reply(400);

      await store.dispatch(fetchSimilarAction('id'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilarAction.pending.type,
        fetchSimilarAction.rejected.type,
      ]);
    });
  });

  describe('fetchPromoAction', () => {
    it('should dispatch "fetchPromoAction.pending" and "fetchPromoAction.fulfilled" when server response 200', async () => {
      const mockPromo = promo;
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(200, mockPromo);

      await store.dispatch(fetchPromoAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchPromoActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchPromoAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchPromoAction.pending.type,
        fetchPromoAction.fulfilled.type,
      ]);

      expect(fetchPromoActionFulfilled.payload)
        .toEqual(mockPromo);
    });

    it('should dispatch "fetchPromoAction.pending" and "fetchPromoAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Promo).reply(400);

      await store.dispatch(fetchPromoAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromoAction.pending.type,
        fetchPromoAction.rejected.type,
      ]);
    });
  });

  describe('orderAction', () => {
    const fakeOrder: OrderType = { camerasIds: [1], coupon: null, tel: '+79000000000' };
    it('should dispatch "orderAction.pending" and "orderAction.fulfilled" when server response 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Order).reply(200);

      await store.dispatch(orderAction(fakeOrder));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        orderAction.pending.type,
        orderAction.rejected.type,
      ]);
    });

    it('should dispatch "orderAction.pending" and "orderAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Order).reply(400);

      await store.dispatch(orderAction(fakeOrder));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        orderAction.pending.type,
        orderAction.rejected.type,
      ]);
    });
  });
});
