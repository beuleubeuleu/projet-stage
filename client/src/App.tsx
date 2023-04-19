import style from "./App.module.css"
import React from "react";
import { Header }       from "./components/Header";
import Authenticate  from "./components/Authenticate";
import { ProductList }  from "./components/ProductList";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


const App = () => {
  const userToImplement = false

  const router = createBrowserRouter([
    { path: "/home", element: <ProductList/> },
    {path: "/", element: userToImplement? <Navigate to={"/home"} replace/>: <Authenticate/>}
  ]);

  return (
      <div className={style.App}>
        <Toaster/>
        <Header/>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
