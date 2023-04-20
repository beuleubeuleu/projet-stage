import React, { useRef, useState } from "react";
import style                       from "./LoginRegister.module.css";
import AuthService                 from "../../services/AuthService";
import toast                       from "react-hot-toast";
import { useNavigate }                from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const Login: React.FC = () => {
  const navigate = useNavigate()

  const {checkUserData} = useUserContext()

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(
          emailRef.current!.value,
          passwordRef.current!.value
      )
      toast.success(`Hello ${response.user.name}`)

      checkUserData()

      return navigate("/home")
    } catch (error: any) {
      console.log(error)
      toast.error(`Oh nooo, ${ error.response.data.message }! `)
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
      <div className={ style.container }>
        <h3 className={ style.title }>Login</h3>
        <form className={ style.form } onSubmit={ handleSubmit }>
          <div className={ style.formGroup }>
            <input className={ style.input } type="email" name="email" placeholder="Email" ref={ emailRef }/>
            <div className={ style.passwordGroup }>
              <input
                  className={ style.input }
                  type={ showPassword? "text": "password" }
                  name="password"
                  placeholder="Password"
                  ref={ passwordRef }
              />
              <label className={ style.showPasswordLabel }>
                <input className={ style.showPasswordCheckbox } type="checkbox" onChange={ handleShowPassword }/>
                Show Password
              </label>
            </div>
            <button className={ style.submit } type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
  );
};

export default Login;
