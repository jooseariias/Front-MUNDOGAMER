import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderLanding() {

  const [navbar, setNavbar] = useState(false);
  
  return (
    <div>
      <header className="border-b-2 border-gray-400 md:border-none">
        <nav>
          <div className="items-center justify-between px-4 pt-5 md:flex md:items-center">
            <div>
              <div className="flex items-center justify-between ">
                <div className="flex">
                  <div>
                    <h1 className="text-white text-[40px] animate-fade-right animate-once animate-duration-[4000ms]  font-primary">
                      MundoGamer
                    </h1>
                  </div>
                </div>
                <div className="md:hidden animate-fade-left animate-once animate-duration-[4000ms]">
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
                <nav className="mb-5 flex animate-fade-left animate-once animate-duration-[4000ms] flex-col  md:mb-0 md:flex md:flex-row md:items-center md:justify-center md:gap-8">
                  <div>
                    <Link to={"/Login"}>
                      <a
                        className="text-white text-[28px] font-secundary group  transition duration-300 "
                        href=""
                      >
                        Inicia Sesion
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link to={"/Register"}>
                      {" "}
                      <a
                        className="text-white text-[28px] font-secundary group  transition duration-300"
                        href=""
                      >
                        Registrate
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                      </a>
                    </Link>
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
