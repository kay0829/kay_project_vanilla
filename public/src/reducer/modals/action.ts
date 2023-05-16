import { createAction } from '@reduxjs/toolkit';

import { MODAL } from "../../../types/reducer/index";

import { ADD_MODAL, TOGGLE_FOCUS_MODAL, REMOVE_MODAL } from "./actionType";


export const addModal = createAction<MODAL>(ADD_MODAL);

export const toggleFocusModal = createAction<{modalIdx: number, focused: boolean}>(TOGGLE_FOCUS_MODAL);

export const removeModal = createAction<{modalIdx: number}>(REMOVE_MODAL);