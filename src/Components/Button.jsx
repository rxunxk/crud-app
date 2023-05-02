import React from "react";
import "../Styles/Button.css";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/usersSlice";
import { openEditDialog } from "../redux/slices/editDialogSlice";
import { setUserId } from "../redux/slices/userIdSlice";

const Button = ({ label, type, id }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (label === "Delete") dispatch(removeUser(id));
    if (label === "Edit") {
      dispatch(setUserId(id));
      dispatch(openEditDialog());
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
