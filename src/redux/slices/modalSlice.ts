import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  paletteModal: boolean;
  openConfirmModal: boolean;
}

const initialState: IInitialState = {
  paletteModal: false,
  openConfirmModal: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setPaletteModal: (state, action: PayloadAction<boolean>) => {
      state.paletteModal = action.payload;
    },
    setOpenConfirmModal: (state, action: PayloadAction<boolean>) => {
      state.openConfirmModal = action.payload;
    },
  },
});

export const selectPaletteModal = (state: RootState):boolean =>
  state.modalReducer.paletteModal;
export const selectOpenConfirmModal = (state: RootState):boolean =>
  state.modalReducer.openConfirmModal;

export const { setPaletteModal, setOpenConfirmModal } = modalSlice.actions;
export default modalSlice.reducer;
