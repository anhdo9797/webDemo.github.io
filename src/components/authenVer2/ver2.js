import React, { useState } from "react";
import "./stv2.scss";
import logo from "./assets/logov2.png";
import bgv2 from "./assets/bgv2.png";
import menuIcon from "./assets/menu.png";
import { Drawer } from "antd";

const navList = [
  { label: "Home" },
  { label: "Our Lab" },
  { label: "Team" },
  { label: "Case Study" },
  { label: "Community" },
  { label: "Support" },
];

const MyButton = ({ onClick, label, drawerItem, i }) => {
  return (
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
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const AuthenticationVer22 = ({}) => {
  const [visible, setVisible] = useState(false);
  const [drawerItem, setDrawer] = useState(0);

  return (
    <div className="backgroundV22">
      <img src={bgv2} className="imageBg" />
      <div className="containerAuthV22">
        <div className="header">
          <img src={logo} className="logo" />
          <button className="iconMenu" onClick={() => setVisible(true)}>
            <img src={menuIcon} className="iconMenu" />
          </button>

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
                    opacity: drawerItem == i ? 1 : 0.3,
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
                opacity: 0.5,
              }}
              onClick={() => setVisible(false)}
            >
              Register
            </button>
          </Drawer>

          <div className="menu">
            <a className="focus">Home</a>
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
