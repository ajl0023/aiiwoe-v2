import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChatTypeContext = React.createContext({
  chatType: null,
  setChatType: () => {},
});
function Component(props) {
  const [type, setChatType] = useState(null);

  return (
    <ChatTypeContext.Provider value={{ chatType: type, setChatType }}>
      {props.children}
    </ChatTypeContext.Provider>
  );
}
export { ChatTypeContext, Component as ChatTypeComponent };
