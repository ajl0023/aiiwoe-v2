import React, { useCallback, useContext, useEffect } from "react";
import { SocketContext } from "../contexts/SocketContext";
export const useCheckSocket = (cb) => {
  const { socket, setSocket } = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      cb();
    }
  }, [socket]);
  return;
};
