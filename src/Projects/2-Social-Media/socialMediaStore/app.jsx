import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  modalBox: false,
  modal_id: false,
  popup: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalBox = true;
      state.modal_id = action.payload;
    },
    closeModal: (state) => {
      state.modalBox = false;
      state.modal_id = false;
    },
    openPopup: (state, action) => {
      state.popup = {
        text: action.payload.text,
        color_code: action.payload.color_code,
      };
    },
    closePopup: (state) => {
      state.popup = false;
    },
  },
});

export default app.reducer;
export const { openModal, closeModal, openPopup, closePopup } = app.actions;
