import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/auth.slice";

const store = configureStore({ reducer: { authentication: authSlice } });

export type ActionType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
