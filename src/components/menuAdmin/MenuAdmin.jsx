import React from "react";
import { Link } from "react-router-dom";

export default function MenuAdmin() {

  return (
    <div>
        <div className="rounded-[2px] hidden   min-h-[90vh] w-[260px] min-w-[260px]  shadow-2xl  md:block lg:min-w-[260px] 2xl:min-h-[100vh]">
          <div className="flex flex-col  items-center justify-evenly gap-10 mt-20">
            <Link className="bg-white text-center rounded-sm w-[200px]" to={"/Admin"}>
              <button className="bg-white   py-2 m-1">Inicio</button>
            </Link>
            <Link className="bg-white text-center rounded-sm w-[200px]" to={"/Admin/Users"}>
              <button className="bg-white rounded-sm py-2 m-1">Usuarios</button>
            </Link>
            <Link className="bg-white text-center rounded-sm w-[200px]" to={"/Admin/GetProducts"}>
              <button className="bg-white py-2 m-1">Mis Productos</button>
            </Link>
            <Link className="bg-white text-center rounded-sm w-[200px]" to={"/Admin/Product"}>
              <button className="bg-white py-2 m-1">Agregar Productos</button>
            </Link>
          </div>
        </div>
    </div>
  );
}
