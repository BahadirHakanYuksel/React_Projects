import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  modalBox: false,
  modal_id: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalBox = true;
      state.modal_id = action.payload;
    },
    closeModal: (state, action) => {
      state.modalBox = false;
      state.modal_id = false;
    },
  },
});

export default app.reducer;
export const { openModal, closeModal } = app.actions;
