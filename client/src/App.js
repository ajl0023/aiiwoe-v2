import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import CheckSocket from "./components/CheckSocket/CheckSocket";
import CupSelect from "./components/CupSelect/CupSelect";
import Home from "./components/Home/Home";
import { ChatTypeComponent } from "./contexts/ChatContext";
import { SocketComponent } from "./contexts/SocketContext";

import "bootstrap/scss/bootstrap.scss";
// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [currentUser, setCurrentUser] = useState();

  const selectUser = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {}, []);
  return (
    <div className="app-wrapper">
      <Router>
        {/* <Navbar></Navbar> */}

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
      </Router>
    </div>
  );
};

export default App;
