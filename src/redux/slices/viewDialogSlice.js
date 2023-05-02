import { createSlice, createSelector } from "@reduxjs/toolkit";

const viewDialogSlice = createSlice({
  name: "viewDialog",
  initialState: false,
  reducers: {
    closeViewDialog: (state, action) => false,
    openViewDialog: (state, action) => true,
  },
});

export const getViewDialogSelectors = createSelector(
  (state) => state.viewDialog,
  (state) => state
);

export const { closeViewDialog, openViewDialog } = viewDialogSlice.actions;

export default viewDialogSlice.reducer;
