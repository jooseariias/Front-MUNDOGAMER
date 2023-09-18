import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsFillCartFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { addToCard ,buyProduct} from "../../redux/actions/index";
import { User } from "../../Hooks/dataUser";
import { useDispatch } from "react-redux";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cards({ image, id, precio, nombre, removeFavorite }) {

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { userData } = User();
  const idUser = userData.id;
  const notify = () => toast("Agregado Al Carrito 😉");
  const Fav = () => toast("Agregado A Favoritos😉");
  const FavNot = () => toast("Eliminado De Favoritos😒");

  useEffect(() => {
    const favoritesInStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const isItemInFavorites = favoritesInStorage.some(
      (favorite) => favorite.id === id
    );
    setIsFavorite(isItemInFavorites);
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favoritesInStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updatedFavorites = favoritesInStorage.filter(
        (favorite) => favorite.id !== id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      removeFavorite( FavNot());
     
    } else {
      const gameToAdd = {
        id,
        name,
        image,
        precio,
      };
      const updatedFavorites = [...favoritesInStorage, gameToAdd];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      Fav()
    }
  };

  const addCard = (idUser, id) => {
    dispatch(addToCard(idUser, id));
    notify()
  };

  const buyProd = (id,nombre,precio) => {
    const dataBuy = {id,nombre,precio}
    dispatch(buyProduct( dataBuy, idUser))
  };



  return (
    <div className="w-[200px] h-[320px] flex justify-center items-center bg-[#3b25b6] flex-col shadow-md hover:scale-105">
      <div>
        <div className="flex justify-center items-center flex-col">
          <Link to={`/Games/${id}`}>
            <div>
              <img
                className="w-[180px] p-1 h-[225px]"
                src={image}
                alt={image}
              />
            </div>
          </Link>
          <section className="flex gap-4 mt-1">
            <div className="flex justify-center flex-col items-center gap-2">
              <p className="text-white">Precio ${precio}</p>
              <div
                className={`text-[24px] cursor-pointer ${
                  isFavorite ? "text-red-700" : "text-white"
                }`}
                onClick={toggleFavorite }
              >
                <BsFillHeartFill />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-2 ml-3 ">
                <button
                  className="bg-orange-400 p-1 hover:bg-[#00b0ec] font-bold rounded-[2px]"
                  onClick={()=>buyProd(id,nombre,precio)}
                >
                  Comprar
                </button>
                <button
                  className="bg-green-400 p-2 rounded-[2px] hover:bg-[#ba2aff]"
                  onClick={() => addCard(idUser, id)}
                  
                >
                  <BsFillCartFill  className="text-black ml-5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
