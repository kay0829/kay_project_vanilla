import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './global/reducer';
import iconReducer from './icons/iconsReducer';
import {CLEAR_ALL_STATE} from './global/actionType';

export const combinedReducers = combineReducers({
    global: globalReducer,
    icons: iconReducer,
})

export default (state: any, action: any) =>
  combinedReducers(action.type === CLEAR_ALL_STATE ? undefined : state, action);