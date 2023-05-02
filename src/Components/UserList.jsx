import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getUserSelectors } from "../redux/slices/usersSlice";
import "../Styles/UserList.css";

const UserList = () => {
  const users = useSelector(getUserSelectors);

  if (users.length > 0) {
    return (
      <div className="user-list">
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            gender={user.gender}
            id={user.id}
          ></Card>
        ))}
      </div>
    );
  } else {
    return (
      <div className="empty-list-placeholder-text">
        Click on the blue button below to add a new user!
      </div>
    );
  }
};

export default UserList;
