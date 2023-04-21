import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ModalsState, RootReducerState, MODAL } from '../../../types/reducer';
import { addModal } from "./action";
import { _render } from '../../core/CustomReact';

const initialState: ModalsState = {
  modals : [],
}

export const modalStateSelector = (state: RootReducerState): ModalsState => {
  return state.modalReducer;
};

const modalsReducer = createReducer(initialState, builder =>
  builder.addCase(
    addModal,
    (state, action: PayloadAction<MODAL>) => {
      state.modals.push(action.payload);
      _render();
    }
  )
)

export default modalsReducer;
