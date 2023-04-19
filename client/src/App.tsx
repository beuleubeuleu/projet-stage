import style from "./App.module.css"
import React from "react";
import { Header }      from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
      <div className={style.App}>
        <Toaster/>
        <Header/>
        <ProductList/>
      </div>
  )
}

export default App
