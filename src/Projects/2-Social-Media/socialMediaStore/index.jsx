import { configureStore } from "@reduxjs/toolkit";
import app from "./app";

export const socialMediaStore = configureStore({
  reducer: { app },
});
