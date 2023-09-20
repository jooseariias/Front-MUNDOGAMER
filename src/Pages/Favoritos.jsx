import Cards from "../components/Cards/Cards";
import { useState, useEffect } from "react";
import HeaderGlobal from "../components/headerGlobal/HeaderGlobal";

export default function Favoritos() {

  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const favoritesInStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(favoritesInStorage);
  }, []);

  const removeFavorite = (idToRemove) => {
    const updatedFavorites = favorite.filter((item) => item.id !== idToRemove);
    setFavorite(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <HeaderGlobal />
      <div className="flex flex-wrap mt-5 ml-3 gap-5">
        {favorite && favorite.length !== 0 ? (
          favorite.map(({ id, name, image, precio, nombre }) => {
            return (
              <div key={id}>
                <Cards
                  id={id}
                  name={name}
                  image={image}
                  precio={precio}
                  nombre={nombre}
                  removeFavorite={() => removeFavorite(id)}
                />
              </div>
            );
          })
        ) : (
          <p className="text-white font-secundary text-[50px] mt-10 ml-10">
            No hay Favoritos
          </p>
        )}
      </div>
    </div>
  );
}
