import { cupObj } from "../../../images/cups/cups";
import "./Message.scoped.scss";
import classNames from "classnames";
import { useContext } from "react";
import { SocketContext } from "../../../contexts/SocketContext";
import { PopperWrapper } from "../../PopperElement/PopperRef";

export function Message({
  msg,
  setPopperActive,
  setPopperContent,

  setPopperRef,
}) {
  const { socket } = useContext(SocketContext);

  return (
    <div
      className={classNames({
        "msg-container": true,
        "d-flex": true,
        "justify-content-end": socket.id !== msg.user.id,
      })}
    >
      <div className="user-container">
        <div className="prof-image-container">
          <PopperWrapper
            content={msg.user.name}
            setPopperRef={setPopperRef}
            setPopperContent={setPopperContent}
            setPopperActive={setPopperActive}
          >
            <img src={cupObj[msg.user.name].default} alt="" />{" "}
          </PopperWrapper>
        </div>
      </div>
      <div className="text-wrapper">
        <PopperWrapper
          content={msg.sent_at}
          setPopperRef={setPopperRef}
          setPopperContent={setPopperContent}
          setPopperActive={setPopperActive}
        >
          <div
            className={classNames({
              "text-container": true,
              "incoming-msg": socket.id !== msg.user.id,
              "current-user-msg": socket.id === msg.user.id,
            })}
          >
            {msg.text}
          </div>
        </PopperWrapper>
      </div>
    </div>
  );
}
