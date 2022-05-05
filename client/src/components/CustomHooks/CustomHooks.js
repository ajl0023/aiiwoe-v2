import { useEffect, useState } from "react";
import { getSocket } from "../../socketInstance";

export const useSubscribe = (props, chatType) => {
  const [room, setRoom] = useState();
  const [roomInd, setRoomInd] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getSocket.on("leave", (roomData, key, i) => {
      setUsers(roomData);
    });
    getSocket.on("join", (roomData, key, i) => {
      setUsers(roomData);
    });
    getSocket.emit("join", props.currentUser, chatType, (room, i) => {
      setRoom(() => {
        return room;
      });
      setRoomInd(i);
    });
  }, []);
  useEffect(() => {
    return () => {
      if (room) {
        getSocket.emit("leave", room, chatType, () => {});
      }
    };
  }, [room]);
  return { users, room };
};
export const useTypingUsers = (props) => {
  const [typing, setTyping] = useState({});
  useEffect(() => {
    getSocket.on("finished typing", () => {
      setTyping({});
    });
  }, []);
  useEffect(() => {
    getSocket.on("typing", (id) => {
      setTyping((prev) => {
        return { ...prev, [id]: true };
      });
    });
  }, []);
  return { typing };
};
