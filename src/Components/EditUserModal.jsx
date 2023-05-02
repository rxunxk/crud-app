import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserIdSelectors } from "../redux/slices/userIdSlice";
import { getUserSelectors } from "../redux/slices/usersSlice";
import "../Styles/AddUserModal.css";
import { editUser } from "../redux/slices/usersSlice";
import { closeEditDialog } from "../redux/slices/editDialogSlice";

const EditUserModal = () => {
  const userId = useSelector(getUserIdSelectors);
  const users = useSelector(getUserSelectors);
  const user = users.find((user) => user.id === userId);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const genderInputHandler = (e) => {
    setGender(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(closeEditDialog());
    dispatch(
      editUser({ id: userId, name: name, email: email, gender: gender })
    );
  };

  return (
    <>
      <div className="modal-bg">
        <div className="modal-fg">
          <form onSubmit={submitHandler} className="modal-form">
            <input
              type="text"
              placeholder={user.name}
              value={name}
              onChange={nameInputHandler}
            />
            <input
              type="email"
              placeholder={user.email}
              value={email}
              onChange={emailInputHandler}
            />
            <input
              type="text"
              placeholder={user.gender}
              value={gender}
              onChange={genderInputHandler}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
