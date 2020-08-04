import React, { useState } from "react";
import "./style.scss";
import logo from "./assets/logo.png";
import image from "./assets/image.png";
import menuIcon from "./assets/menu.png";
import { Menu, Dropdown, Button, Drawer, Divider } from "antd";

const navList = [
  { label: "Home" },
  { label: "Our Lab" },
  { label: "Team" },
  { label: "Case Study" },
  { label: "Community" },
  { label: "Support" },
];

const AuthenticationVer2 = ({}) => {
  const [navFocus, setNavFocus] = useState(0);
  const [visible, setVisible] = useState(false);
  const [drawerItem, setDrawer] = useState(0);

  const focusNav = () => {};

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
    <div className="containerAuthV2">
      <div className="modal"> modal</div>
      <div className="header">
        <img src={logo} className="logo" />

        <button className="iconMenu" onClick={() => setVisible(true)}>
          <img src={menuIcon} className="iconMenu" />
        </button>

        <div className="menu">
          {navList.map((e, i) => (
            <a key={i}>{e.label}</a>
          ))}
        </div>

        <Drawer
          title="Menu"
          placement="right"
          closable={false}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          {navList.map((e, i) => (
            <div>
              <button
                variant="light"
                style={{
                  alignItems: "start",
                  backgroundColor: "white",
                  color: "black",
                  justifyContent: "start",
                  fontSize: 14,
                  outline: "none",
                  border: "none",
                  margin: 0,
                  height: "6vh",
                  fontWeight: drawerItem == i ? "bold" : 100,
                }}
                onClick={() => {
                  setVisible(false);
                  setDrawer(i);
                }}
              >
                {e.label}
              </button>
            </div>
          ))}
          <button
            variant="light"
            style={{
              alignItems: "start",
              backgroundColor: "white",
              color: "#ee4064",
              justifyContent: "start",
              fontSize: 14,
              outline: "none",
              border: "none",
              margin: 0,
              height: "6vh",
            }}
            onClick={() => setVisible(false)}
          >
            {/* <a style={{ fontSize: 18 }} key={i}> */}
            Register
            {/* </a> */}
          </button>
        </Drawer>
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
