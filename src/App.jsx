import React from "react";
import "./Styles/App.css";
import AddUserModal from "./Components/AddUserModal";
import { useSelector, useDispatch } from "react-redux";
import { openDialog, getDialogSelectors } from "./redux/slices/dialogSlice";
import UserList from "./Components/UserList";
import Fab from "@mui/material/Fab";
import { getEditDialogSelectors } from "./redux/slices/editDialogSlice";
import { getViewDialogSelectors } from "./redux/slices/viewDialogSlice";
import EditUserModal from "./Components/EditUserModal";
import Navbar from "./Components/Navbar";
import ViewUserModal from "./Components/ViewUserModal";

const App = () => {
  const dispatch = useDispatch();
  const isDialogOpen = useSelector(getDialogSelectors);
  const isEditDialogOpen = useSelector(getEditDialogSelectors);
  const isViewDialogOpen = useSelector(getViewDialogSelectors);
  const addClickHandler = () => {
    dispatch(openDialog());
  };

  return (
    <>
      <Navbar />
      {isDialogOpen && <AddUserModal />}
      {isEditDialogOpen && <EditUserModal />}
      {isViewDialogOpen && <ViewUserModal />}
      <UserList />
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          right: "10%",
          bottom: "10%",
          fontSize: "2rem",
          fontWeight: "light  ",
        }}
        onClick={addClickHandler}
      >
        +
      </Fab>
    </>
  );
};

export default App;
