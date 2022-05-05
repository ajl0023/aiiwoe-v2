import { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { SocketContext } from "../../contexts/SocketContext";
import { init_socket_mock, join_room_mock } from "../../dev_stuff/functions";
import { useCheckSocket } from "../../hooks/useCheckSocket";

import { getNewSocket, getSocket } from "../../socketInstance";
import ChatBox from "../ChatBox/ChatBox";
import { ChatTable } from "../ChatTable/ChatTable";

import "./ChatRoom.scoped.scss";

export default function ChatRoom(props) {
  const [users, setUsers] = useState([]);
  const { socket, setSocket } = useContext(SocketContext);
  // useEffect(() => {
  //   join_room_mock(socket);
  // }, []);
  useEffect(() => {
    let ignore = false;
    socket.on("user_joined", (users) => {
      if (!ignore) {
        setUsers(users);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="wrapper d-flex">
      <ChatTable users={users} />
      <ChatBox />
    </div>
  );
}
