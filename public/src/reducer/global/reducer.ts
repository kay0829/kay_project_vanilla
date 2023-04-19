/* eslint-disable no-param-reassign */
import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {changeGlobalIsLoading} from './action';
import {GlobalState, RootReducerState} from '../../../types/reducer';

const initialState: GlobalState = {
  isLoading: false,
};

export const globalStateSelector = (state: RootReducerState): GlobalState => {
  return state.globalReducer;
};

const globalReducer = createReducer(initialState, builder =>
  builder.addCase(
    changeGlobalIsLoading,
    (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  ),
);

export default globalReducer;
