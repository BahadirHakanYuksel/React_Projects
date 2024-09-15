import { configureStore } from "@reduxjs/toolkit";
import app from "./app";

export const SocialMediaStore = configureStore({
  reducer: { app },
});
