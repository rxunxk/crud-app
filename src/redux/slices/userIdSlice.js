import { createSlice, createSelector } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
  name: "userId",
  initialState: 0,
  reducers: {
    setUserId: (state, action) => action.payload,
  },
});

export const getUserIdSelectors = createSelector(
  (state) => state.userId,
  (state) => state
);

export const { setUserId } = userIdSlice.actions;

export default userIdSlice.reducer;
