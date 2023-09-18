import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Cookies from "js-cookie";
import { FiChevronDown } from "react-icons/fi";
import {
  FcShop,
  FcLike,
  FcReadingEbook,
  FcHome,
  FcCancel,
} from "react-icons/fc";
export default function HeaderLanding( {handleChange ,search}) {

  const [navbar, setNavbar] = useState(false);
  const [icon,setIcon]= useState(false);
  const [userData, setUserData] = useState({
    Nombre: "",
    Apellido: "",
    Imagen: "",
  });

  const SessionClean = () => {
    Cookies.remove("user");
   
  };

  useEffect(() => {
    const userJSON = Cookies.get("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      setUserData({
        Nombre: user.nombre,
        Apellido: user.apellido,
        Imagen: user.imagen,
      });
    }
  }, []);
  
  return (
    <div>
      <header className="border-b-2  shadow-2xl md:border-none">
        <nav>
          <div className="items-center h-[80px] justify-evenly md:flex md:items-center">
            <div>
              <div className="flex items-center justify-between ">
                <div className="flex ">
                  <div>
                    <Link to="/Home">
                      <h1 className="text-white text-[40px]  font-primary">
                        MundoGamer
                      </h1>
                    </Link>
                  </div>
                </div>
                <div className="ml-14 hidden md:block">
                  <Search   handleChange={handleChange} search={search}/>
                </div>
                <div className="md:hidden ">
                  <button
                    className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[38px] w-[48px] text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div
                className={`mt-5 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <nav className="mb-5 flex flex-col  md:mb-0 md:flex md:flex-row md:items-center md:justify-center md:gap-8">
                 <div className="flex justify-center gap-4">
                  <p className="font-primary text-white  text-[30px]">
                    {userData.Nombre}
                   
                  </p>
                  <img
                    className="w-[45px] rounded-[50px]"
                    src={userData.Imagen}
                    alt="Usuario"
                  />
                  <nav className="mb-5 flex flex-col md:mb-0 md:flex md:flex-row md:items-center md:justify-center md:gap-8">
                    <div className="relative">
                      <button
                        className="text-white p-2 outline-none focus:border focus:border-gray-400"
                        onClick={() => {
                          setIcon(!icon);
                        }}
                      >
                        <FiChevronDown
                          className={`h-6 w-6 transition-transform ${
                            icon ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {icon && (
                        <div className="absolute top-10 right-0 mt-2 py-2 w-48 bg-[#533dce] rounded-lg shadow-lg">
                          <Link
                            to="/Mydata"
                            className="block px-4 py-2 text-white hover:bg-[#8881ad]"
                          >
                            <div className="flex items-center gap-3">
                              <FcReadingEbook /> Perfil
                            </div>
                          </Link>
                          <Link
                            to="/Carrito"
                            className="block px-4 py-2 text-white hover:bg-[#8881ad]"
                          >
                            <div className="flex items-center gap-3">
                              {" "}
                              <FcShop />
                              Carrito
                            </div>
                          </Link>
                          <Link
                            to="/Favoritos"
                            className="block px-4 py-2 text-white hover:bg-[#8881ad]"
                          >
                            <div className="flex items-center gap-3">
                              {" "}
                              <FcLike />
                              Favoritos
                            </div>
                          </Link>
                          <Link
                            to="/Buys"
                            className="block px-4 py-2 text-white hover:bg-[#8881ad]"
                          >
                            <div className="flex items-center gap-3">
                              <FcHome /> Mis Compras
                            </div>
                          </Link>
                          <Link
                            to="/"
                            onClick={() => SessionClean()}
                            className="block px-4 py-2 text-white hover:bg-[#8881ad]"
                          >
                            <div className="flex items-center gap-3">
                              <FcCancel /> Cerrar Sesion
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </nav>
                  </div>
                  
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
