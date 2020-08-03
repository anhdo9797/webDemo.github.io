import React, { useState } from "react";
import "./stv2.scss";
import logo from "./assets/logov2.png";
import bgv2 from "./assets/bgv2.png";
import menuIcon from "./assets/menu.png";
import { Menu, Dropdown, Button } from "antd";

const AuthenticationVer22 = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <Menu
      style={{ width: "70vw", height: "40%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
    >
      <Menu.Item className="menuItem">
        <a>Home</a>
      </Menu.Item>
      <Menu.Item>
        <a>Our Lab</a>
      </Menu.Item>
      <Menu.Item>
        <a>Team</a>
      </Menu.Item>
      <Menu.Item>
        <a>Case Study</a>
      </Menu.Item>
      <Menu.Item>
        <a>Community</a>
      </Menu.Item>
      <Menu.Item>
        <a>Support</a>
      </Menu.Item>
      <Menu.Item>
        <a>Register for free</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="backgroundV22">
      <img src={bgv2} className="imageBg" />
      <div className="containerAuthV22">
        <div className="header">
          <img src={logo} className="logo" />
          <Dropdown overlay={menu}>
            <img src={menuIcon} className="iconMenu" />
          </Dropdown>

          <div className="menu">
            <a>Home</a>
            <a>Our Lab</a>
            <a>Team</a>
            <a>Case Study</a>
            <a>Community</a>
            <a>Support</a>
          </div>
          <button className="register">Register for free </button>
        </div>

        <div className="main">
          <div className="title">
            <h1>Discover reality in every pixel</h1>
            <h2>
              Explore your reality in an immersive environment with every tool
              to move and participate using our VR headsets. This is an headshot
              VR/AR concept design.
            </h2>
            <div className="wrapButtons">
              <button>Play a reality</button>
              <button className="outline">Watch a demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthenticationVer22;
