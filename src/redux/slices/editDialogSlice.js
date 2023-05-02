import { createSlice, createSelector } from "@reduxjs/toolkit";

const editDialogSlice = createSlice({
  name: "editDialog",
  initialState: false,
  reducers: {
    closeEditDialog: (state, action) => false,
    openEditDialog: (state, action) => true,
  },
});

export const getEditDialogSelectors = createSelector(
  (state) => state.editDialog,
  (state) => state
);

export const { closeEditDialog, openEditDialog } = editDialogSlice.actions;

export default editDialogSlice.reducer;
