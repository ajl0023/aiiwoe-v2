import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Routes } from "react-router";
import bootstrap from "bootstrap/scss/bootstrap.scss";
import "./App.css";
import Home from "./components/Home/Home";
import CupSelect from "./components/CupSelect/CupSelect";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import { SocketContext, SocketComponent } from "./contexts/SocketContext";
import { ChatTypeComponent } from "./contexts/ChatContext";
import CheckSocket from "./components/CheckSocket/CheckSocket";
// import Navbar from "./components/Navbar/Navbar";
const UserContext = React.createContext(null);
const SocketProvider = React.createContext(null);
const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [chatType, setChatType] = useState();

  const selectUser = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {}, []);
  return (
    <div className="app-wrapper">
      <Router>
        {/* <Navbar></Navbar> */}
        {/* <UserContext.Provider
          value={{
            user: currentUser,
            setCurrentUser,
          }}
        > */}

        <SocketComponent>
          <ChatTypeComponent>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="select" element={<CupSelect />}></Route>
              <Route
                path="chat"
                element={
                  <CheckSocket>
                    <ChatRoom />
                  </CheckSocket>
                }
              ></Route>
            </Routes>
          </ChatTypeComponent>
        </SocketComponent>

        {/* </UserContext.Provider> */}
      </Router>
    </div>
  );
};

export default App;
