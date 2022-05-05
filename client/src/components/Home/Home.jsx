import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChatTypeContext } from "../../contexts/ChatContext";
import logo from "../../images/logo.png";
import "./Home.scoped.scss";

const Home = (props) => {
  const chatTypeContext = useContext(ChatTypeContext);

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="button-container">
        <button className="btn btn-primary">
          <Link className="btn-link" to="/select?type=group">
            Group
          </Link>
        </button>
        <button className="btn btn-outline-primary">
          <Link className="btn-link" to="/select?type=individual">
            Individual
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
