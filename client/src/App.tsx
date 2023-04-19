import style from "./App.module.css"
import React from "react";
import { Header }      from "./components/Header";
import { ProductList } from "./components/ProductList";

const App = () => {

  return (
      <div className={style.App}>
        <Header/>
        <ProductList/>
      </div>
  )
}

export default App
