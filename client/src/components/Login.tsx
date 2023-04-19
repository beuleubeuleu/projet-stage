import React, { useRef, useState } from "react";
import axios from "axios";
import style from "./LoginRegister.module.css";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/users/login", {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className={style.container}>
        <h3 className={style.title}>Login</h3>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <input className={style.input} type="email" name="email" placeholder="Email" ref={emailRef} />
            <div className={style.passwordGroup}>
              <input
                  className={style.input}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
              />
              <label className={style.showPasswordLabel}>
                <input className={style.showPasswordCheckbox} type="checkbox" onChange={handleShowPassword} />
                Show Password
              </label>
            </div>
            <button className={style.submit} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
  );
};

export default Login;
