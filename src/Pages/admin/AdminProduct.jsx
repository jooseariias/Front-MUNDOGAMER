import HeaderGlobal from "../../components/headerGlobal/HeaderGlobal";
import MenuAdmin from "../../components/menuAdmin/MenuAdmin";
import axios from "axios";
import { useState, useEffect } from "react";
const URL_BACK = "https://mundogamer.onrender.com"
export default function AdminProduct() {
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [productData, setProductData] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    stock: 0,
    year: 0,
    trailer: "",
    platformId: 0,
    genderId: 0,
  });

  useEffect(() => {
    fetch(`${URL_BACK}/plataforma`)
      .then((res) => res.json())
      .then((data) => setPlatforms(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${URL_BACK}/genero`)
      .then((res) => res.json())
      .then((data) => setGenres(data))
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${URL_BACK}/producto`,
        productData
      );
      if(response){
        window.location.href = "/Admin";
      }
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <MenuAdmin />
        <section className="flex w-[100%] m-2 mt-5">
          <div className="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-[100%]">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="nombre"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="nombre"
                  type="text"
                  placeholder="Gtav"
                  name="nombre"
                  value={productData.nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="descripcion"
                >
                  Descripción
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="descripcion"
                  type="text"
                  placeholder="descripcion"
                  name="descripcion"
                  value={productData.descripcion}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="precio"
                >
                  Precio
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="precio"
                  type="number"
                  placeholder="Precio"
                  name="precio"
                  value={productData.precio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="imagen"
                >
                  Imagen URL
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="imagen"
                  type="text"
                  placeholder="URL de la imagen"
                  name="imagen"
                  value={productData.imagen}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="stock"
                  type="number"
                  placeholder="Stock"
                  name="stock"
                  value={productData.stock}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="year"
                >
                  Año
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="year"
                  type="number"
                  placeholder="Año"
                  name="year"
                  value={productData.year}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="trailer"
                >
                  Trailer URL
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  id="trailer"
                  type="text"
                  placeholder="URL del trailer"
                  name="trailer"
                  value={productData.trailer}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="platformId"
                >
                  Plataforma
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="platformId"
                  name="platformId"
                  value={productData.platformId}
                  onChange={handleInputChange}
                >
                  <option value={0}>Seleccione una plataforma</option>
                  {platforms.map((platform) => (
                    <option key={platform.id} value={platform.id}>
                      {platform.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="genderId"
                >
                  Género
                </label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="genderId"
                  name="genderId"
                  value={productData.genderId}
                  onChange={handleInputChange}
                >
                  <option value={0}>Seleccione un género</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.genero}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="md:w-full px-3">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Agregar Producto
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
