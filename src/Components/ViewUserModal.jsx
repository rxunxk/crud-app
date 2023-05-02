import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserIdSelectors } from "../redux/slices/userIdSlice";
import { getUserSelectors } from "../redux/slices/usersSlice";
import { closeViewDialog } from "../redux/slices/viewDialogSlice";
import "../Styles/AddUserModal.css";

const ViewUserModal = () => {
  const dispatch = useDispatch();

  const userId = useSelector(getUserIdSelectors);
  const users = useSelector(getUserSelectors);
  const user = users.find((user) => user.id === userId);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(closeViewDialog());
  };

  return (
    <>
      <div className="modal-bg">
        <div className="modal-fg">
          <form onSubmit={submitHandler} className="modal-form">
            <input type="text" placeholder={user.name} readOnly />
            <input type="email" placeholder={user.email} readOnly />
            <input type="text" placeholder={user.gender} readOnly />
            <button type="submit">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewUserModal;
