import React, { useEffect, useState } from "react";
import style from "./style.scss";
import logo from "./assets/logo.png";
import { dataCarousel } from "./dataTest";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
  AlignRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import footer from "./assets/footer.png";

const Challenge4 = () => {
  const [startCarousel, setStart] = useState(2);
  const [ITEM_CAROUSEL, setItem] = useState(
    window.innerWidth > 1280 ? 5 : window.innerWidth < 600 ? 1 : 3
  );
  const [MEDIAN, setMedia] = useState(0);
  const [showMenu, setShow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.innerWidth > 1280
      ? setItem(5)
      : window.innerWidth < 600
      ? setItem(1)
      : setItem(3);

    setMedia((ITEM_CAROUSEL - 1) / 2);

    console.log("====================================");
    console.log(ITEM_CAROUSEL, MEDIAN, window.innerWidth);
    console.log("====================================");
  });

  const rightClick = () => {
    if (startCarousel + ITEM_CAROUSEL < dataCarousel.length) {
      setStart(startCarousel + 1);
    } else {
      setStart(0);
    }
  };
  const leftClick = () => {
    if (startCarousel == 0) {
      setStart(dataCarousel.length - ITEM_CAROUSEL);
    } else {
      setStart(startCarousel - 1);
    }
  };

  const renderItem = (e, i) => (
    <div className={"item"}>
      <img src={e.src} />
      <div className="maskCover" />
      <div className="outer">
        <p className="label">{e.label} </p>
        <p className="title">{e.title} </p>
      </div>
    </div>
  );

  return (
    <div className="containerV4">
      <div className="header">
        <img className="logo" src={logo} />
        <div className="nav">
          <a>CITIES</a>
          <a>EXPLORE</a>
          <a>TOUR</a>
          <a>ABOUT US</a>
          <a>BOOK</a>
        </div>
        <form className="search">
          <input
            placeholder="Search"
            value={search}
            onChange={(text) => setSearch(text.target.value)}
          />
          {search ? (
            <button>
              <SearchOutlined />
            </button>
          ) : null}
        </form>
        <div className="menuPhone">
          <button onClick={() => setShow(!showMenu)}>
            <AlignRightOutlined />
          </button>
        </div>
      </div>
      {showMenu ? (
        <div className="menu">
          <a>CITIES</a>
          <a>EXPLORE</a>
          <a>TOUR</a>
          <a>ABOUT US</a>
          <a>BOOK</a>
          <form className="search">
            <input
              placeholder="Search"
              value={search}
              onChange={(text) => setSearch(text.target.value)}
            />
            {search ? (
              <button>
                <SearchOutlined />
              </button>
            ) : null}
          </form>
        </div>
      ) : null}
      <div className="content">
        <div className="lineHorizontal" />
        <h4 className="titleContent">
          Discover amazing places in Nigeria for your next destination
        </h4>

        <div className="carousel">
          {/* list Item sẽ phụ thuộc vô chiều rộng màn, >128 => 5 item 
        cái item active sẽ là item chính giữa MEDIAN */}

          <div className="left" style={{ width: (screen.width - 365) / 2 }}>
            {/* lấy số phần tử từ start => trung vị */}
            {dataCarousel
              .slice(startCarousel, startCarousel + MEDIAN)
              .map((e, i) => renderItem(e, i))}
            <button onClick={leftClick}>
              <DoubleLeftOutlined className="icon" />
            </button>
          </div>

          <div className="itemActive">
            {/* item trung vị đc active */}
            <img src={dataCarousel[startCarousel + MEDIAN].src} />
            <div className="maskCover" />
            <div className="outer">
              <p className="label">
                {dataCarousel[startCarousel + MEDIAN].label}
              </p>
              <p className="title">
                {dataCarousel[startCarousel + MEDIAN].title}
              </p>
              <button>DISCOVER</button>
            </div>
          </div>
          <div className="right" style={{ width: (screen.width - 365) / 2 }}>
            {/* từ trung vị đến hết số ITEM */}
            <button onClick={rightClick}>
              <DoubleRightOutlined className="icon" />
            </button>
            {dataCarousel
              .slice(startCarousel + MEDIAN + 1, startCarousel + ITEM_CAROUSEL)
              .map((e, i) => renderItem(e, i))}
          </div>
        </div>
      </div>
      <div className="footer">
        <img src={footer} />
        <div className="content">
          <div>
            <h2 className="title">7 unforgettable days</h2>
            <p className="contentX">
              7 expertly-crafted tours; 7 unforgettable days. Our tours run
              throughout the year, bringing you to the most memorable places in
              Nigeria. Each day gives you a balance of guided touring and
              opportunities to explore on you own. Choose your accommodation
              package and leave the rest up to us.
            </p>
          </div>
          <div className="wrapButton">
            <button>LETS DO THIS</button>
            <div style={{ display: "flex" }}>
              <button className="icon">
                <LeftOutlined />
              </button>
              <button className="icon">
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge4;
