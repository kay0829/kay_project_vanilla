import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {focusIcon} from "./action";
import {GlobalState, RootReducerState} from '../../../types/reducer';
import { IIcons } from '../../../types/components/common/icons';

const initialState = {
  focusedIcons: {},
}

export const globalStateSelector = (state: RootReducerState): GlobalState => {
  return state.globalReducer;
};

const iconsReducer = createReducer(initialState, builder =>
  builder.addCase(
    focusIcon,
    (state, action: PayloadAction<IIcons>) => {
      state.focusedIcons = action.payload;
    }
  )
)

export default iconsReducer;
