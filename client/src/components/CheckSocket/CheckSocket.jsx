import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { SocketContext } from "../../contexts/SocketContext";
import { init_socket_mock, join_room_mock } from "../../dev_stuff/functions";
import { useCheckSocket } from "../../hooks/useCheckSocket";

import { getNewSocket, getSocket } from "../../socketInstance";

import "./CheckSocket.scoped.scss";
export default function CheckSocket(props) {
  const handleChange = (value, cb) => {
    cb(value);
  };
  const navigate = useNavigate();
  const handleEnter = () => {};
  const { socket, setSocket } = useContext(SocketContext);
  useCheckSocket(() => {});
  useEffect(() => {
    if (!socket) {
      navigate("/");
    }
    // init_socket_mock(socket, setSocket);
  }, []);
  return <React.Fragment>{socket && props.children}</React.Fragment>;
}
