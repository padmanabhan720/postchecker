import React from "react";
import user from "../images/user.png";

const AccountCard = (props) => {
  const {  first_name,last_name, email } = props.account;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{first_name} {last_name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}></i>
    </div>
  );
};

export default AccountCard;