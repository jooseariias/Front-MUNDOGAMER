import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home";

import Mydata from "./Pages/Mydata";
import Games from "./Pages/Games";
import Admin from "./Pages/admin/admin";
import AdminProduct from "./Pages/admin/AdminProduct";
import AdminUser from "./Pages/admin/AdminUser";
import AdminGetProducts from "./Pages/admin/AdminProducts";
import Carrito from "./Pages/Carrito";
import Favoritos from "./Pages/Favoritos";
import PrivateRoute from "./Hooks/PrivateRoute";
import RoutesUser from "./Hooks/RoutesUsers";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        {/* Rutas Usuario */}
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound/>}/>
   {/* Rutas del usuario */}
        <Route exact path="/Home" element={<Home />} />
       
        <Route
          exact
          path="/Mydata"
          element={<Mydata  />}
        />
        <Route
          exact
          path="/Carrito"
          element={<Carrito  />}
        />
        <Route
          exact
          path="/Games/:id"
          element={<Games />}
        />
        <Route
          exact
          path="/Favoritos"
          element={<Favoritos />}
        />

        {/* Rutas Admin */}
        <Route path="/Admin" element={<PrivateRoute element={<Admin />} />} />
        <Route
          path="/Admin/Product"
          element={<PrivateRoute element={<AdminProduct />} />}
        />
        <Route
          path="/Admin/Users"
          element={<PrivateRoute element={<AdminUser />} />}
        />
        <Route
          path="/Admin/GetProducts"
          element={<PrivateRoute element={<AdminGetProducts />} />}
        />
      </Routes>
    </>
  );
}

export default App;
