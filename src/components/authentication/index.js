import React, { useState } from "react";
import "./style.scss";
import logo from "./assets/Logo.png";
import close from "./assets/close.png";
import check from "./assets/check.png";

const WrapForm = ({ label, placeholder, value, onChange, type }) => {
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
        {value.length > 4 ? <img src={check} /> : null}
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
        />
        <WrapForm
          label="YOUR EMAIL"
          placeholder="Type your Username"
          value={singUpInput.email}
          onChange={(text) =>
            setSignUpInput({ ...singUpInput, email: text.target.value })
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
        />
        <WrapForm
          label="REPEAT YOUR PASSWORD"
          placeholder="Type your Username"
          value={singUpInput.repeatPass}
          type="password"
          onChange={(text) =>
            setSignUpInput({ ...singUpInput, repeatPass: text.target.value })
          }
        />

        <button>Sign up</button>
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
        />

        <WrapForm
          label="YOUR PASSWORD"
          placeholder="Type your password"
          value={sigInInput.password}
          type="password"
          onChange={(text) =>
            setSignIn({ ...sigInInput, password: text.target.value })
          }
        />

        <button>Sign in</button>
      </div>
    );
  };
  const [focusAuth, setFocus] = useState(true);
  return (
    <div className="fullScreen">
      <div className="containerAuth">
        <div className="selectionAuth">
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
