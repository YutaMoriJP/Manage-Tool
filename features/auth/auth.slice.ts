import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false
};

//slice represents state and logic of state
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = true;
    },
    toggle(state) {
      !state.isAuthenticated;
    },
    updateTo(state, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    }
  }
});

//dispatchers
export const { authenticate, toggle, updateTo } = authSlice.actions;

export default authSlice.reducer;
