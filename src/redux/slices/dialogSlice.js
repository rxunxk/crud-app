import { createSlice, createSelector } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: false,
  reducers: {
    closeDialog: (state, action) => false,
    openDialog: (state, action) => true,
  },
});

export const getDialogSelectors = createSelector(
  (state) => state.dialog,
  (state) => state
);

export const { closeDialog, openDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
