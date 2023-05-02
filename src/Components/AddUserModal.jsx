import React, { useState } from "react";
import "../Styles/AddUserModal.css";
import { closeDialog } from "../redux/slices/dialogSlice";
import { addUser } from "../redux/slices/usersSlice";
import { useDispatch } from "react-redux";

const AddUserModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const inputGenderHandler = (e) => {
    setGender(e.target.value);
  };

  const isInputValid = () => {
    if (name === "" || name === "Name") {
      alert("Name cannot be empty!");
      return false;
    }
    if (email === "" || email === "Email") {
      alert("Email cannot be empty!");
      return false;
    }
    if (gender === "" || gender === "Gender") {
      alert("Gender cannot be empty!");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isInputValid()) {
      dispatch(closeDialog());
      dispatch(
        addUser({
          name: name,
          email: email,
          gender: gender,
          id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
        })
      );
    }
  };

  return (
    <div className="modal-bg">
      <div className="modal-fg">
        <form onSubmit={submitHandler} className="modal-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={inputNameHandler}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={inputEmailHandler}
          />
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={inputGenderHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
