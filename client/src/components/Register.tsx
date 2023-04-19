import React, { useRef, useState } from "react";
import axios                       from "axios";
import style from "./LoginRegister.module.css";
import { Navigate }      from "react-router-dom";
import toast                       from "react-hot-toast";
import { Simulate }                from "react-dom/test-utils";
import durationChange = Simulate.durationChange;

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
      const response = await axios.post("/api/v1/users/register", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        phone: phoneRef.current?.value,
        street: streetRef.current?.value,
        apartment: apartmentRef.current?.value,
        zip: zipRef.current?.value,
        city: cityRef.current?.value,
        country: countryRef.current?.value,
      });

      response.status == 201? setIsRegisterSuccess(true): toast.error(response.data.message);
    } catch (err) {
      console.error(err);
    }
  };
if(isRegisterSuccess) {
  toast.success("go login masta", {duration: 100000})
  return <>
    <iframe src="https://giphy.com/embed/111ebonMs90YLu" width="480" height="360" frameBorder="0"
            className="giphy-embed" allowFullScreen></iframe>
    <p>
      <a href="https://giphy.com/gifs/thumbs-up-111ebonMs90YLu">via GIPHY</a>
    </p>
  </>
}
  return (
      <div className={style.container}>
        <h3 className={style.title}>Registration</h3>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <input className={style.input} type="text" name="name" placeholder="Name" ref={nameRef} />
            <input className={style.input} type="email" name="email" placeholder="Email" ref={emailRef} />
            <input className={style.input} type="password" name="password" placeholder="Password" ref={passwordRef} />
            <input className={style.input} type="tel" name="phone" placeholder="Phone" ref={phoneRef} />
          </div>
          <div className={style.formGroup}>
            <input className={style.input} type="text" name="street" placeholder="Street" ref={streetRef} />
            <input className={style.input} type="text" name="apartment" placeholder="Apartment" ref={apartmentRef} />
            <input className={style.input} type="text" name="zip" placeholder="Zip" ref={zipRef} />
            <input className={style.input} type="text" name="city" placeholder="City" ref={cityRef} />
            <input className={style.input} type="text" name="country" placeholder="Country" ref={countryRef} />
          </div>
          <button className={style.submit} type="submit">Register</button>
        </form>
      </div>
  );
};

export default Register;
