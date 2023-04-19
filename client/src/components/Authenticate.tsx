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

  return (
      <div className={`${style.container} ${animate? style.swingOutBottomBack: ""}`}>
        {isRegister ? <Register /> : <Login />}
        <p onClick={handleToggleAuth}>
          {isRegister ? "Already have an account? Log in" : "Don't have an account? Register"}
        </p>
      </div>
  );
};

export default Authenticate;
