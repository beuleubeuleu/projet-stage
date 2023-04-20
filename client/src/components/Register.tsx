import React, { useRef, useState } from "react";
import style                       from "./LoginRegister.module.css";
import toast                       from "react-hot-toast";
import AuthService                 from "../../services/AuthService";

const Register: React.FC = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const apartmentRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const request = await AuthService.register(
          nameRef.current!.value,
          emailRef.current!.value,
          passwordRef.current!.value,
          phoneRef.current!.value,
          streetRef.current!.value,
          apartmentRef.current!.value,
          zipRef.current!.value,
          cityRef.current!.value,
          countryRef.current!.value
      )
      toast.success("go login masta", { duration: 100000 })
      setIsRegisterSuccess(true)
    } catch (error: any) {
      toast.error(`mmh, ${ error.response.data.message }`)
    }
  };
  if ( isRegisterSuccess ) {
    return <>
      <iframe src="https://giphy.com/embed/111ebonMs90YLu" width="480" height="360" frameBorder="0"
              className="giphy-embed" allowFullScreen></iframe>
      <p>
        <a href="https://giphy.com/gifs/thumbs-up-111ebonMs90YLu">via GIPHY</a>
      </p>
    </>
  }
  return (
      <div className={ style.container }>
        <h3 className={ style.title }>Registration</h3>
        <form className={ style.form } onSubmit={ handleSubmit }>
          <div className={ style.formGroup }>
            <input className={ style.input } type="text" name="name" placeholder="Name" required ref={ nameRef }/>
            <input className={ style.input } type="email" name="email" placeholder="Email" required ref={ emailRef }/>
            <input className={ style.input } type="password" name="password" placeholder="Password" required
                   ref={ passwordRef }/>
            <input className={ style.input } type="tel" name="phone" placeholder="Phone" required ref={ phoneRef }/>
          </div>
          <div className={ style.formGroup }>
            <input className={ style.input } type="text" name="street" placeholder="Street" defaultValue={""} ref={ streetRef }/>
            <input className={ style.input } type="text" name="apartment" placeholder="Apartment" defaultValue={""} ref={ apartmentRef }/>
            <input className={ style.input } type="text" name="zip" placeholder="Zip" defaultValue={""} ref={ zipRef }/>
            <input className={ style.input } type="text" name="city" placeholder="City" defaultValue={""} ref={ cityRef }/>
            <input className={ style.input } type="text" name="country" placeholder="Country" defaultValue={""} ref={ countryRef }/>
          </div>
          <button className={ style.submit } type="submit">Register</button>
        </form>
      </div>
  );
};

export default Register;
