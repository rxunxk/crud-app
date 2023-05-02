import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { getUserSelectors } from "../redux/slices/usersSlice";

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
    return <h1>No users added!</h1>;
  }
};

export default UserList;
