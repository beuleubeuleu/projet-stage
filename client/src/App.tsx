import style                                             from "./App.module.css"
import React                                             from "react";
import { Header }                                        from "./components/Header";
import Authenticate                                      from "./pages/Authenticate/Authenticate";
import { ProductList }                                   from "./pages/HomePage/ProductList";
import { Toaster }                                       from "react-hot-toast";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useUserContext }                                from "./context/UserContext";
import ProductDetail                                     from "./pages/ProductDetail/ProductDetail";


const App = () => {
  const { user } = useUserContext()

  const router = createBrowserRouter([
    { path: "/", element: user? <Navigate to={ "/home" } replace/>: <Authenticate/> },
    { path: "/home", element: user? <ProductList/>: <Navigate to={ "/" }/> },
    { path: "/home/:idProduct", element: user? <ProductDetail/>: <Navigate to={ "/" }/> }
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
