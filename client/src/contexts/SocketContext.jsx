import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { init_socket } from "../socketInstance";

const SocketContext = React.createContext({
  socket: null,
  setSocket: null,
});

function Component(props) {
  const [socket, setSocket] = useState(null);
  const location = useLocation();
  const gen_socket = useCallback(() => {
    const new_socket = init_socket();

    setSocket(new_socket);
  }, []);

  return (
    <SocketContext.Provider value={{ socket, setSocket: gen_socket }}>
      {props.children}
    </SocketContext.Provider>
  );
}
export { SocketContext, Component as SocketComponent };
