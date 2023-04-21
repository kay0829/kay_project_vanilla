import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { _render } from '../core/CustomReact';

import globalReducer from './global/reducer';
import modalsReducer from './modals/reducer';

export const rootReducer = combineReducers({
    global: globalReducer,
    modals: modalsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store;