import { store } from '.';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Selector = Pick<State, keyof State>;
