import { useState } from "react";
import io from "socket.io-client";
import { cupObj } from "../../images/cups/cups";

import { getNewSocket, getSocket } from "../../socketInstance";

import "./UsersBar.scoped.scss";
export default function UsersBar(props) {
  const handleChange = (value, cb) => {
    cb(value);
  };
  const handleEnter = () => {};
  return (
    <div className="wrapper d-flex border-bottom">
      {props.users.map((user) => {
        return (
          <div className="user-container">
            <img src={cupObj[user.name].default} alt="" />
          </div>
        );
      })}
    </div>
  );
}
