import { createReducer } from '@reduxjs/toolkit';
import { addModal } from "./action";
import { _render } from '../../core/CustomReact';
const initialState = {
    modals: [],
};
export const modalStateSelector = (state) => {
    return state.modalReducer;
};
const modalsReducer = createReducer(initialState, builder => builder.addCase(addModal, (state, action) => {
    state.modals.push(action.payload);
    _render();
}));
export default modalsReducer;
//# sourceMappingURL=reducer.js.map