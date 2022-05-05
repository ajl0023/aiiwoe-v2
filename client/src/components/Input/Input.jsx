import React, { useState } from "react";
import io from "socket.io-client";
import { useHandleChange } from "../../hooks/useHandleChange";

import { getNewSocket, getSocket } from "../../socketInstance";

import "./Input.scoped.scss";
export default function Input(props) {
  const { input, handleChange } = useHandleChange();

  return (
    <React.Fragment>
      {props.render(input)}
      <input
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.onKeyDown(input);
          }
        }}
        type="text"
        className="form-control"
        aria-label="Amount (to the nearest dollar)"
      />
    </React.Fragment>
  );
}
