import React, { useEffect, useState } from "react";
const URL_BACK = "http://localhost:3001"
export default function Filter({ onPlatformChange, onGenreChange,handlePriceFilterChange }) {

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
    <nav className="flex flex-col  items-center gap-5 mt-8">
      <div>
        <select
          className="bg-[#533dce] w-[160px] rounded-[2px] px-6 text-white py-1"
          name="priceSelect"
          onChange={(e) => handlePriceFilterChange(e.target.value)}
          defaultValue="all" 
        >
          <option value="all">Precio</option>
          <option value="higher">Menor</option>
          <option value="lower">Mayor</option>
        </select>
      </div>
      <div>
        <select
          className="bg-[#533dce] w-[160px] rounded-[2px] mt-5 px-6 text-white py-1"
          name="platformSelect"
          onChange={(e) => onPlatformChange(e.target.value)}
          defaultValue="all" 
        >
          <option value="all">Plataformas</option>
          {platafomas.map((plataform) => (
            <option  key={plataform.id} value={plataform.nombre}>
              {plataform.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          className="bg-[#533dce] w-[160px] rounded-[px] mt-5 px-6 text-white py-1"
          name="genreSelect"
          onChange={(e) => onGenreChange(e.target.value)}
          defaultValue="all" 
        >
          <option value="all">Generos</option>
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
