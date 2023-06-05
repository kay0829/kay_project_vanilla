/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { changeGlobalIsLoading } from './action';
const initialState = {
    isLoading: false,
};
export const globalStateSelector = (state) => {
    return state.globalReducer;
};
const globalReducer = createReducer(initialState, builder => builder.addCase(changeGlobalIsLoading, (state, action) => {
    state.isLoading = action.payload;
}));
export default globalReducer;
//# sourceMappingURL=reducer.js.map