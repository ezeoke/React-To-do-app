import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Header = props => {
  return (
    <div>
      <h2>{props.title || "header"}</h2>{" "}
      <NavLink activeClassName="am-active" to="/" exact>
        Todo App
      </NavLink>
      <NavLink activeClassName="am-active" to="/likesApp">
        Likes App
      </NavLink>
      <NavLink activeClassName="am-active" to="/localstorage">
        Local Storage
      </NavLink>
      <h1 />
    </div>
  );
};

export default Header;
