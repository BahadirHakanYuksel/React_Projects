import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export default app.reducer;
export const {} = app.actions;
