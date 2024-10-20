import { configureStore } from "@reduxjs/toolkit";
import oss_app from "./oss_app";

export const oss = configureStore({
  reducer: {
    oss_app,
  },
});
