import { useCallback, useState } from "react";
import io from "socket.io-client";
import ReactDOM from "react-dom";
import { getNewSocket, getSocket } from "../../socketInstance";

import "./PopperElement.scoped.scss";
import { usePopper } from "react-popper";
import { useSetPopper } from "../../hooks/useSetPopperRef";
let activeTimeout;
export function PopperWrapper({
  setPopperActive,
  setPopperRef,
  children,
  content,
  setPopperContent,
}) {
  const handleVisible = useCallback((e) => {
    activeTimeout = setTimeout(() => {
      setPopperActive(true);
      setPopperRef(e.target);
      setPopperContent(content);
    }, 200);
  }, []);

  return (
    <div
      onMouseEnter={(e) => {
        handleVisible(e);
      }}
      onMouseOut={(e) => {
        clearTimeout(activeTimeout);
        setPopperActive(false);

        setPopperRef(null);
      }}
      className="popper-wrapper"
    >
      {children}
    </div>
  );
}
