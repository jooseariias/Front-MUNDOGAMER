import React from "react";
import img from "../assets/2.png";
import Google from "../Utils/Auth";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginUser } from "../redux/actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const redirectToHome = useNavigate()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () => toast("Correo o contraseña no son correctas ..😢 ");

  const onSubmit = (data) => {
    const user = data;

    dispatch(LoginUser(user))
    .then((response) => {
        redirectToHome("/Home");
    })
    .catch(() => notify());
  };
  
  return (
    <div>
      <h1 className="text-white animate-fade-up animate-once animate-duration-[3000ms] text-[50px] md:text-[96px] font-primary text-center">
        MundoGamer
      </h1>
      <section className="flex gap-10  justify-around items-center">
        <div className=" hidden md:block">
          <img
            className="w-[600px] h-[500px] animate-fade-up animate-once animate-duration-[3000ms]"
            src={img}
            alt=""
          />
        </div>
        <section className="flex flex-col justify-center items-center">
          <div className="h-screen bg-gradient-to-br flex justify-center items-center w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" animate-fade-left animate-once animate-duration-[3000ms] text-left px-10 py-8 rounded-xl w-screen shadow-2xl max-w-sm">
                <div className="space-y-4">
                  <h1 className="  font-secundary text-2xl font-semibold text-white text-center">
                    Iniciar Sesion
                  </h1>
                  <div>
                    <label
                      for="email"
                      className="block mb-1 font-secundary text-gray-600 font-semibold"
                    >
                      Correo
                    </label>
                    <input
                      type="email"
                      className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Este Campo es Requerido",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato del correo no es correcto",
                        },
                      })}
                    />
                  </div>
                  <div>
                    {" "}
                    {errors.email && (
                      <span className="text-[#FF0000]">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      for="email"
                      className="block font-secundary mb-1 text-gray-600 font-semibold"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                        minLength: {
                          value: 4,
                          message:
                            "La contraseña debe tener al menos 6 caracteres",
                        },
                      })}
                    />
                  </div>
                  <div>
                    {" "}
                    {errors.password && (
                      <span className="text-[#FF0000]">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
                <button className="mt-4 font-secundary w-full bg-gradient-to-tr bg-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide hover:bg-indigo-600">
                  Entrar
                </button>
                
                <div className="mt-5 text-center font-secundary">
                <Link to={"/Register"}>
                  <p className="hover:text-white">No tienes Cuenta? Registrate</p>
                  </Link>
                </div>
                
                <div className="bg-greey-400 border-[1px] w-[80%] ml-8 mt-4  "></div>
                <div className="flex justify-center mt-5">
                  <Google />
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
      <ToastContainer />
    </div>
  );
}
