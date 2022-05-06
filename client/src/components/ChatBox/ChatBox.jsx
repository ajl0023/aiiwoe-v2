import React, { useContext } from "react";
import { SocketContext } from "../../contexts/SocketContext";
import Input from "../Input/Input";
import MessageContainer from "../MessageContainer/MessageContainer";
import "./ChatBox.scoped.scss";
import moment from "moment";
import UsersBar from "../UsersBar/UsersBar";
export default function ChatBox(props) {
  const { socket } = useContext(SocketContext);

  const handleMessage = (input) => {
    socket.emit("message", {
      text: input,
      sent_at: moment().format("LT"),
    });
  };

  return (
    <div className="wrapper">
      <div className="messages-wrapper">
        <div className="message-container">
          <MessageContainer />
        </div>
      </div>

      <div className="input-group">
        <Input
          onKeyDown={handleMessage}
          render={(input) => {
            return (
              <span
                className="input-group-text send-btn"
                onClick={() => {
                  handleMessage(input);
                }}
              >
                Send
              </span>
            );
          }}
        />
      </div>
    </div>
  );
}
