import React, { useCallback, useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/SocketContext";
export const useHandleChange = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return { input, handleChange };
};
