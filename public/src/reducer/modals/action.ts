import { createAction } from '@reduxjs/toolkit';
import { ADD_MODAL } from "./actionType";
import { MODAL } from "../../../types/reducer/index";

export const addModal = createAction<MODAL>(ADD_MODAL);