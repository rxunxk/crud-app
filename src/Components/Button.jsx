import React from "react";
import "../Styles/Button.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/usersSlice";
import { openEditDialog } from "../redux/slices/editDialogSlice";
import { setUserId } from "../redux/slices/userIdSlice";
import { openViewDialog } from "../redux/slices/viewDialogSlice";

const Button = ({ label, type, id }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (label === "Delete") dispatch(removeUser(id));
    else if (label === "Edit") {
      dispatch(setUserId(id));
      dispatch(openEditDialog());
    } else if (label === "View") {
      dispatch(setUserId(id));
      dispatch(openViewDialog());
    }
  };
  return (
    <>
      <button className={`btn btn-${type}`} onClick={clickHandler}>
        {label}
      </button>
    </>
  );
};

export default Button;
