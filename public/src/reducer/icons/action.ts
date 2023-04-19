import { createAction } from '@reduxjs/toolkit';
import { FOCUS_ICON } from "./actionType";
import { IIcons } from "../../../types/components/common/icons";

export const focusIcon = createAction<IIcons, string>(FOCUS_ICON);