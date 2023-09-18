import React from "react";
import Img from "../../assets/landing/1.png";
import { Link } from "react-router-dom";

export default function Landi() {

  return (
    <div>
      <section className="flex gap-10 flex-col  md:flex-row mt-16">
        <section className="flex flex-col  justify-evenly">
          <div>
            <h2 className="text-white text-[32px] animate-fade-right animate-once animate-duration-[4000ms]  font-secundary mb-5 ">
              ¡Bienvenido a la tienda de videojuegos definitiva! En nuestra
              tienda, encontrarás un paraíso lleno de aventuras virtuales y
              mundos por explorar.
            </h2>
          </div>
          <div className="flex justify-center gap-24 animate-fade-up animate-once animate-duration-[4000ms]">
            <div>
              <Link to={"/Login"}>
                <button className="bg-[#CE2C94] px-14 py-2 rounded-[50px] text-white font-secundary">
                  Inica Sesion
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/Register"}>
                <button className="bg-[#50CDFD] px-10 py-2 rounded-[50px] text-white font-secundary">
                  Registrate
                </button>
              </Link>
            </div>
          </div>
        </section>
        <img
          className="animate-fade-up animate-once animate-duration-[4000ms]"
          src={Img}
          alt="Imagen"
        />
      </section>
    </div>
  );
}
