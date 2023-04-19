import React, { useState } from "react";
import style from "./Authenticate.module.css"
import Register from "./Register";
import Login from "./Login";

const Authenticate = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [animate, setAnimate] = useState(false);

  const handleToggleAuth = () => {
    setAnimate(()=>true)
    setTimeout(()=> {
      setIsRegister(!isRegister)
    setAnimate(()=>false)
    },700)
    ;
  };

  let accentText = isRegister? "Sign in": "Register"

  return (
      <div className={`${style.container} ${animate? style.swingOutBottomBack: ""}`}>
        {isRegister ? <Register /> : <Login />}
        <p onClick={handleToggleAuth}>
          {isRegister ? "Already have an account? " : "Don't have an account? "} <span>{ accentText }</span>
        </p>
      </div>
  );
};

export default Authenticate;
