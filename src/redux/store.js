import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import dialogReducer from "./slices/dialogSlice";
import editDialogReducer from "./slices/editDialogSlice";
import userIdReducer from "./slices/userIdSlice";
import viewDialogReducer from "./slices/viewDialogSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    dialog: dialogReducer,
    editDialog: editDialogReducer,
    userId: userIdReducer,
    viewDialog: viewDialogReducer,
  },
  devTools: true,
});
