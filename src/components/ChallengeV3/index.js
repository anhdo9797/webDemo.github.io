import React, { useEffect, useState } from "react";
import "./style.scss";

import { Button, Dropdown, Menu } from "antd";
import {
  DownOutlined,
  RightOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

import logo from "./assets/logo.png";
import menuIC from "./assets/menu.png";
import close from "./assets/close.png";
import { dataItem } from "./dataTest";

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu Products</Menu.Item>
    <Menu.Item key="2">2nd menu Products</Menu.Item>
    <Menu.Item key="3">3rd menu Products</Menu.Item>
  </Menu>
);
const menuUC = (
  <Menu>
    <Menu.Item key="4">1st menu Uses cases</Menu.Item>
    <Menu.Item key="5">2nd menu Uses cases</Menu.Item>
    <Menu.Item key="6">3rd menu Uses cases</Menu.Item>
  </Menu>
);
const menuD = (
  <Menu>
    <Menu.Item key="7">1st menu Docs</Menu.Item>
    <Menu.Item key="8">2nd menu Docs</Menu.Item>
    <Menu.Item key="9">3rd menu Docs</Menu.Item>
  </Menu>
);

const menuP = (
  <Menu>
    <Menu.Item key="10">1st menu Pricing</Menu.Item>
    <Menu.Item key="11">2nd menu Pricing</Menu.Item>
    <Menu.Item key="12">3rd menu Pricing</Menu.Item>
  </Menu>
);

const ItemNav = ({ overlay, label }) => {
  return (
    <Dropdown overlay={overlay}>
      <a>
        {label} <DownOutlined style={{ marginLeft: 2 }} />
      </a>
    </Dropdown>
  );
};

const ChallengeV3 = () => {
  const [n, setN] = useState(0);
  const [listItem, setList] = useState(dataItem.slice(n, n + 3));
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKey] = useState();

  const rightClick = () => {
    if (n < dataItem.length - 3) {
      setN(n + 1);
    } else {
      setN(0);
    }

    setList(dataItem.slice(n, n + 3));

    console.log("n", n, listItem);
  };

  const leftClick = () => {
    if (n == 0) {
      setN(dataItem.length - 3);
    } else {
      setN(n - 1);
    }

    setList(dataItem.slice(n, n + 3));
    console.log("n", n, listItem);
  };

  return (
    <div className="containerV3">
      <div className="maskCover" />

      <div className="outer">
        <div className="header">
          {/* Menu for lap and desk */}
          <img src={logo} className="logo" />
          <div className="nav">
            <ItemNav label="Products" overlay={menu} />
            <ItemNav label="Uses cases" overlay={menuUC} />
            <ItemNav label="Docs" overlay={menuD} />
            <a>Pricing</a>
            <ItemNav label="About us" overlay={menu} />
          </div>

          <div>
            <a>Login</a>
            <button className="getAPIKey">Get API Key</button>
          </div>

          {/* Menu for phone devices */}
          <div className="menuPhone">
            <button onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? (
                <img src={close} />
              ) : (
                <img src={menuIC} className="iconMenu" />
              )}
            </button>
          </div>
        </div>
        {collapsed ? (
          <div className="showMenu">
            <Menu mode="inline" style={{ width: "100%", border: "none" }}>
              <SubMenu key="sub1" title="Products" className="subMenu">
                {menu}
              </SubMenu>
              <SubMenu key="sub2" title="Use Cases" className="subMenu">
                {menuUC}
              </SubMenu>
              <SubMenu key="sub3" title="Docs" className="subMenu">
                {menuD}
              </SubMenu>
              <Menu.Item key="sub4" title="Pricing" className="subMenu">
                Pricing
              </Menu.Item>
              <SubMenu key="sub5" title="About us" className="subMenu">
                {menuD}
              </SubMenu>
              <Menu.Item key="sub6" title="Pricing" className="subMenu">
                Login
              </Menu.Item>
              <button className="getAPIphone">Get API Key</button>
            </Menu>
          </div>
        ) : null}

        <div className="wrap">
          <div className="rotate">
            <a className="focus"> Powered by trust</a>

            <a>Your favorite fintech company</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="wrapTitle">
              <p className="label">Welcome</p>
              <p className="title">
                Empowering your everyday transactions making payment processing
                easy
              </p>
              <button>
                Get Started <RightOutlined style={{ marginLeft: 3 }} />
              </button>
            </div>
            <div className="carousel">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between ",
                  width: "93%",
                }}
              >
                {/*show 3 item for lap and desk  */}
                {listItem.map((e, i) => {
                  return (
                    <div className={"itemCarousel"}>
                      <img src={e.src} />
                      <div className="wrapLabel">
                        <p className="labelItem">{e.label}</p>
                        <p>{e.title}</p>
                      </div>
                    </div>
                  );
                })}
                {/*show 1 item for phone  */}
                <div className={"itemCarouselPhone"}>
                  <img src={dataItem[n].src} />
                  <div className="wrapLabel">
                    <p className="labelItem">{dataItem[n].label}</p>
                    <p>{dataItem[n].title}</p>
                  </div>
                </div>
                {/*show 2 item for tablet */}
                <div className={"itemCarouselTab"}>
                  <img src={dataItem[n].src} />
                  <div className="wrapLabel">
                    <p className="labelItem">{dataItem[n].label}</p>
                    <p>{dataItem[n].title}</p>
                  </div>
                </div>{" "}
                <div className={"itemCarouselTab"}>
                  <img src={dataItem[n + 1].src} />
                  <div className="wrapLabel">
                    <p className="labelItem">{dataItem[n + 1].label}</p>
                    <p>{dataItem[n + 1].title}</p>
                  </div>
                </div>
              </div>

              <div className="wrapButton">
                <button onClick={leftClick}>
                  <LeftCircleOutlined className="icon" />
                </button>
                <button onClick={rightClick}>
                  <RightCircleOutlined className="icon" theme="outlined" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeV3;
