import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, phone, address } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div >Email : {email}</div>
        <div>Phone Number : {phone}</div>
        <div>Address : {address}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
