import React, { useEffect, useState } from "react";
const URL_BACK = "http://localhost:3001"
export default function FilterMobile({ onPlatformChange, onGenreChange,handlePriceFilterChange }) {

  const [platafomas, setPlataformas] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    fetch(`${URL_BACK}/genero`)
      .then((res) => res.json())
      .then((res) => {
        setGeneros(res);
      });
  }, []);

  useEffect(() => {
    fetch(`${URL_BACK}/plataforma`)
      .then((res) => res.json())
      .then((res) => {
        setPlataformas(res);
      });
  }, []);
  
  return (
    <div>
    <nav className="flex justify-center items-center gap-3">
      <div>
        <select
          className="bg-[#533dce] w-[160px] rounded-[6px] px-6 text-white py-1"
          name="priceSelect"
          onChange={(e) => handlePriceFilterChange(e.target.value)}
          defaultValue="all" // Set default value here
        >
          <option value="all">Precio</option>
          <option value="higher">Menor</option>
          <option value="lower">Mayor</option>
        </select>
      </div>
      <div>
        <select
          className="bg-[#533dce] w-[160px] rounded-[6px] px-6 text-white py-1"
          name="platformSelect"
          onChange={(e) => onPlatformChange(e.target.value)}
          defaultValue="all" // Set default value here
        >
          <option value="all">PLATAFORMAS</option>
          {platafomas.map((plataform) => (
            <option key={plataform.id} value={plataform.nombre}>
              {plataform.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="bg-[#533dce] w-[160px] rounded-[6px] px-6 text-white py-1"
          name="genreSelect"
          onChange={(e) => onGenreChange(e.target.value)}
          defaultValue="all" // Set default value here
        >
          <option value="all">GENEROS</option>
          {generos.map((genero) => (
            <option key={genero.id} value={genero.nombre}>
              {genero.genero}
            </option>
          ))}
        </select>
      </div>
    </nav>
  </div>
  );
}
