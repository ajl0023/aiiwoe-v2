import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./CupSelect.scoped.scss";
import { cups } from "../../images/cups/cups";
import _ from "lodash";
import { SocketContext } from "../../contexts/SocketContext";
import { ChatTypeContext } from "../../contexts/ChatContext";
const UserCup = ({ item, setSelected, selected, type }) => {
  const location = useLocation();
  const { socket } = useContext(SocketContext);
  const { chatType } = useContext(ChatTypeContext);
  const navigate = useNavigate();
  const joinRoom = (item) => {
    socket.emit("join", { ...item, type: chatType }, (room) => {});

    setSelected(item);

    navigate(`/chat`);
  };

  return (
    <div
      onClick={() => {
        joinRoom(item);
      }}
      className="cup-select-container d-flex flex-column align-items-center"
    >
      <div className="cup-image-container">
        <img className="cup-select" src={item.file.default} alt="" />
      </div>
      <div className="cup-label">{_.startCase(item.name)}</div>
    </div>
  );
};
const CupSelect = (props) => {
  const [selected, setSelected] = useState(null);
  const socketContext = useContext(SocketContext);
  const chatTypeContext = useContext(ChatTypeContext);
  const location = useLocation();
  useEffect(() => {
    const search = location.search;
    const params = new URLSearchParams(search);
    const chatType = params.get("type");

    socketContext.setSocket();
    chatTypeContext.setChatType(chatType);
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="select-wrapper d-flex flex-column">
        <div className="header-container p-2">Select your coffee character</div>
        <div className="cups-container d-flex">
          {cups.map((item) => {
            if (socketContext.socket) {
              return (
                <UserCup
                  key={item.name}
                  setSelected={setSelected}
                  item={item}
                  selected={selected}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CupSelect;
