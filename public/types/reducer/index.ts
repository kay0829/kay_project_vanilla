import { IIcons } from "../components/common/icons";

export type MODAL = {icon: IIcons, content: string, modalIdx: number, focused: boolean};
export interface ModalsState {
    modals: Array<MODAL>;
}

/**
 * global reducer
 */
export interface GlobalState {
    isLoading: boolean;
}

export interface RootReducerState {
    modalReducer: ModalsState;
    globalReducer: GlobalState;
}
  