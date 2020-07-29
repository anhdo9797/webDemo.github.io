import React, { useState } from "react";
import "./style.scss";
import logo from "./assets/Logo.png";
import close from "./assets/close.png";
import check from "./assets/check.png";
import lap from "./assets/lap.jpg";
import { checkPassword } from "./checkpass";

const listExtends = [
  { label: "About" },
  { label: "Terms" },
  { label: "Contact" },
];

var splChars = !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g;

const WrapForm = ({ label, placeholder, value, onChange, type, condition }) => {
  return (
    <div>
      <form>
        <label>{label} </label>
        <input
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          type={type ? type : null}
        />

        {condition ? <img src={check} className="iconCheck" /> : null}
      </form>
    </div>
  );
};

const Authentication = () => {
  const [singUpInput, setSignUpInput] = useState({
    userName: "",
    email: "",
    password: "",
    repeatPass: "",
  });

  const [sigInInput, setSignIn] = useState({ userName: "", password: "" });

  const [selectExtend, setSelectE] = useState(0);
  const singUp = () => {
    return (
      <div className="padding">
        <WrapForm
          label="YOUR USERNAME"
          placeholder="Type your Username"
          value={singUpInput.userName}
          onChange={(userName) =>
            setSignUpInput({ ...singUpInput, userName: userName.target.value })
          }
          condition={singUpInput.userName.length > 4}
        />
        <WrapForm
          label="YOUR EMAIL"
          placeholder="Type your email"
          value={singUpInput.email}
          onChange={(text) =>
            setSignUpInput({ ...singUpInput, email: text.target.value })
          }
          condition={
            singUpInput.email.substr(0, 1) !== "." &&
            singUpInput.email.indexOf("@gmail.com") != -1
          }
        />
        <WrapForm
          label="YOUR PASSWORD"
          placeholder="Type your password"
          value={singUpInput.password}
          type="password"
          onChange={(text) =>
            setSignUpInput({ ...singUpInput, password: text.target.value })
          }
          condition={checkPassword(singUpInput.password) == true}
        />
        <WrapForm
          label="REPEAT YOUR PASSWORD"
          placeholder="Repeat your password"
          value={singUpInput.repeatPass}
          type="password"
          onChange={(text) =>
            setSignUpInput({ ...singUpInput, repeatPass: text.target.value })
          }
          condition={
            singUpInput.repeatPass &&
            singUpInput.password === singUpInput.repeatPass
          }
        />

        <button>SIGN UP</button>
      </div>
    );
  };

  const signIn = () => {
    return (
      <div className="padding">
        <div style={{ height: 61 }} />
        <WrapForm
          label="YOUR USERNAME"
          placeholder="Type your Username"
          value={sigInInput.userName}
          onChange={(userName) =>
            setSignIn({ ...sigInInput, userName: userName.target.value })
          }
          condition={sigInInput.userName.length > 3}
        />

        <WrapForm
          label="YOUR PASSWORD"
          placeholder="Type your password"
          value={sigInInput.password}
          type="password"
          onChange={(text) =>
            setSignIn({ ...sigInInput, password: text.target.value })
          }
          condition={checkPassword(sigInInput.password) == true}
        />

        <button>SIGN IN</button>
      </div>
    );
  };
  const [focusAuth, setFocus] = useState(true);
  return (
    <div className="fullScreen">
      <div className="containerAuth">
        <div className="selectionAuth">
          <div>
            <img src={logo} />
            <br />
            <button
              onClick={() => setFocus(true)}
              className={focusAuth ? "buttonFocus" : null}
            >
              Sing up
            </button>

            <button
              onClick={() => setFocus(false)}
              className={focusAuth ? null : "buttonFocus"}
            >
              Sign in
            </button>
          </div>

          <div>
            {listExtends.map((item, index) => {
              return (
                <button
                  key={index}
                  className={selectExtend == index ? "focus" : "extend"}
                  onClick={() => setSelectE(index)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="input">
          <div className="header">
            <div className="closeIcon">
              <img src={close} width="14" height="14" />
            </div>
          </div>
          {focusAuth ? singUp() : signIn()}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
