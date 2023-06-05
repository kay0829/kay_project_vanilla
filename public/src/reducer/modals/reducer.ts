import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ModalsState, RootReducerState, MODAL } from '../../../types/reducer';
import { addModal, toggleFocusModal, removeModal } from "./action";
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
      const temp = [...state.modals];
      state.modals = temp.map((v) => {
        return {...v, focused: false};
      });
      state.modals.push(action.payload);
    }
  )
  .addCase(
    toggleFocusModal,
    (state, action: PayloadAction<{modalIdx: number, focused: boolean}>) => {
      const temp = [...state.modals];
      state.modals = temp.map((v) => {
        if (action.payload.focused) {
          if (action.payload.modalIdx === v.modalIdx) {
            return {...v, focused: true};
          }
  
          return {...v, focused: false};
        }

        if (!action.payload.focused) {
          if (action.payload.modalIdx === v.modalIdx) {
            return {...v, focused: false};
          }
        }

        return {...v}
      });
    }
  )
  .addCase(
    removeModal,
    (state, action: PayloadAction<{modalIdx: number}>) => {
      const temp = [...state.modals];
      console.log("remove modalIdx", action.payload.modalIdx);
      state.modals = temp.filter(v => v.modalIdx !== action.payload.modalIdx)
    }
  )
)

export default modalsReducer;
