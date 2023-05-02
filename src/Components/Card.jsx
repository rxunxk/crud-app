import React from "react";
import Button from "./Button";
import "../Styles/Card.css";

const Card = ({ name, email, gender, id }) => {
  return (
    <div className="card">
      <div className="user-details">
        <p className="user-name">{name}</p>
        <p className="user-email">{email}</p>
        <p className="user-gender">{gender}</p>
      </div>
      <div className="card-buttons">
        <Button label="View" type="primary" id={id} />
        <Button label="Edit" type="primary" id={id} />
        <Button label="Delete" type="delete" id={id} />
      </div>
    </div>
  );
};

export default Card;
