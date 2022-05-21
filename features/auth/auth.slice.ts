import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: true
};

// Slice represents state and logic of state
const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    authenticate(state: AuthState, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },

    toggle(state: AuthState) {
      state.isAuthenticated = !state.isAuthenticated;
    },

    updateTo(state: AuthState, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    }
  }
});

// Dispatchers
export const { authenticate, toggle, updateTo } = authSlice.actions;

export default authSlice.reducer;
