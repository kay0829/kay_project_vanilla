import {createAction} from '@reduxjs/toolkit';
import {
  CHANGE_GLOBAL_IS_LOADING,
  CLEAR_ALL_STATE,
} from './actionType';

export const clearAllReducerState = createAction<void, string>(CLEAR_ALL_STATE);
export const changeGlobalIsLoading = createAction<boolean, string>(
  CHANGE_GLOBAL_IS_LOADING,
);
