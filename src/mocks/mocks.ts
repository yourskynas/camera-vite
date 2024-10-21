import { ThunkDispatch } from 'redux-thunk';
import { State } from '../store/types';
import { createAPI } from '../services/api';
import { Action } from 'redux';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
