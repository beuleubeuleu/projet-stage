import style                                             from "./App.module.css"
import React                                             from "react";
import { Header }                                        from "./components/Header";
import Authenticate                                      from "./components/Authenticate";
import { ProductList }                                   from "./components/ProductList";
import { Toaster }                                       from "react-hot-toast";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useUserContext }                                from "../context/UserContext";


const App = () => {
  const { user } = useUserContext()

  const router = createBrowserRouter([
    { path: "/home", element: user? <ProductList/>: <Navigate to={ "/" }/> },
    { path: "/", element: user? <Navigate to={ "/home" } replace/>: <Authenticate/> }
  ]);

  return (
      <div className={ style.App }>
        <Toaster/>
        <Header/>
        <RouterProvider router={ router }/>
      </div>
  )
}

export default App
