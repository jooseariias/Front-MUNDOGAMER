import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import HeaderGlobal from "../components/headerGlobal/HeaderGlobal"
export default function Register() {
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    file: null,
    date: "",
    pais: "",
    provincia: "",
    ciudad: "",
    calle: "",
    numero: "",
    departamento: "",
    codigoPostal: "",
  });

  const notify = () => toast("Usuario Registrado Redirecionando..😎");
  const userError = () =>
    toast("hubo un error al registrar Verifiac los campos..😒");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <HeaderGlobal/>
      <section className="flex mt-48 justify-center animate-fade-up animate-once animate-duration-[2000ms]">
        <div className="shadow-2xl  py-6 px-10 sm:max-w-md w-full  ">
          <div className="sm:text-3xl font-secundary text-2xl font-semibold text-center text-sky-600  mb-12">
            Mis Datos
          </div>
          <form onSubmit={onSubmitForm}>
            <div className=" text-left">
              <div>
                <label
                  htmlFor="nombre"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="apellido"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* <div>
                <label
                  htmlFor="file"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Foto de Perfil
                </label>
                <input
                  type="file"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="file"
                  onChange={handleChange}
                />
              </div> */}

              <div>
                <label
                  htmlFor="date"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="pais"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  País
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="provincia"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Provincia
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="provincia"
                  value={formData.provincia}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="ciudad"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Ciudad
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="calle"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Calle
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="calle"
                  value={formData.calle}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="numero"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Número
                </label>
                <input
                  type="number"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="departamento"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Departamento
                </label>
                <input
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="codigoPostal"
                  className="block mb-1 font-secundary text-gray-600 font-semibold"
                >
                  Código Postal
                </label>
                <input
                  type="number"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  name="codigoPostal"
                  value={formData["codigoPostal"]}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center my-6">
                <button
                  type="submit"
                  className="rounded-full font-secundary p-3 w-full sm:w-56 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold"
                >
                  Guardar
                </button>
              </div>
              <Link to="/Login">
                {" "}
                <div className="flex justify-center">
                  <button className="font-secundary text-white">Volver</button>
                </div>{" "}
              </Link>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
