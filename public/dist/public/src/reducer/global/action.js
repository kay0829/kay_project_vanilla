import { createAction } from '@reduxjs/toolkit';
import { CHANGE_GLOBAL_IS_LOADING, CLEAR_ALL_STATE, } from './actionType';
export const clearAllReducerState = createAction(CLEAR_ALL_STATE);
export const changeGlobalIsLoading = createAction(CHANGE_GLOBAL_IS_LOADING);
//# sourceMappingURL=action.js.map