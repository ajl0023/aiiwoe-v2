import { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { SocketContext } from "../../contexts/SocketContext";
import { useCheckSocket } from "../../hooks/useCheckSocket";
import { v4 as uuid } from "uuid";
import { getNewSocket, getSocket } from "../../socketInstance";
import { Message } from "./Message/Message";

import "./MessageContainer.scoped.scss";
import { PopperElement } from "../PopperElement/PopperElement";
import { useSetPopper } from "../../hooks/useSetPopperRef";

export default function MessageContainer(props) {
  const [messages, setMessages] = useState([]);
  const {
    setPopperActive,
    setPopperContent,
    setPopperRef,
    popperActive,
    popperContent,
    popperRef,
  } = useSetPopper();

  const { socket, setSocket } = useContext(SocketContext);

  useEffect(() => {
    socket.on("message", (message, user) => {
      if (user.name !== "admin") {
        message.user = user;
        message.id = uuid();
        setMessages((messages) => {
          return [...messages, message];
        });
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <PopperElement
        position="left"
        popperRef={popperRef}
        content={popperContent}
        active={popperActive}
      />

      <div className="item-container">
        {messages.map((msg) => {
          return (
            <div key={msg.id} className="message-container">
              <Message
                popperContent={msg.sent_at}
                setPopperRef={setPopperRef}
                setPopperContent={setPopperContent}
                setPopperActive={setPopperActive}
                msg={msg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
