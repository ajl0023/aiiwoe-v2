import React, { useCallback, useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketContext";
export const useSetPopper = (cb) => {
  const [popperActive, setPopperActive] = useState(false);
  const [popperRef, setPopperRef] = useState(null);
  const [popperContent, setPopperContent] = useState(null);

  return {
    setPopperActive,
    setPopperRef,
    setPopperContent,
    popperActive,
    popperRef,
    popperContent,
  };
};
