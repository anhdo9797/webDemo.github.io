import React, { useState } from "react";
import "./style.scss";
import logo from "./assets/logo.png";
import image from "./assets/image.png";
import menuIcon from "./assets/menu.png";
import { Menu, Dropdown, Button } from "antd";

const AuthenticationVer2 = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <Menu
      mode="inline"
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
    >
      <Menu.Item>
        <a>Home</a>
        <a>Our Lab</a>
        <a>Team</a>
        <a>Case Study</a>
        <a>Community</a>
        <a>Support</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="containerAuthV2">
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
            Explore your reality in an immersive environment with every tool to
            move and participate using our VR headsets. This is an headshot
            VR/AR concept design.
          </h2>
          <div className="wrapButtons">
            <button>Play a reality</button>
            <button className="outline">Watch a demo</button>
          </div>
        </div>
        <img src={image} className="image" />
      </div>
    </div>
  );
};
export default AuthenticationVer2;
