import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  buyProduct,
  addToCard,
} from "../redux/actions/index";
import { useEffect } from "react";
import HeaderGlobal from "../components/headerGlobal/HeaderGlobal";
import img from "../assets/mp.png";
import img2 from "../assets/me.png";
import { User } from "../Hooks/dataUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Games() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const game = useSelector((state) => state?.details);
  const { userData } = User();
  const userId = userData?.id;
  //notificaciones
  const notify = () => toast("Ve A mis Compras Una ves Hecho el Pago ");
  const carrito = () => toast("Agregado al carrito😎");

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  const buyProdut = (id, nombre, precio) => {
    const product = { id, nombre, precio };
    dispatch(buyProduct(product, userId));
    notify();
  };

  const addCard = (id) => {
    dispatch(addToCard(userId, id));
    carrito();
  };

  return (
    <div>
      <HeaderGlobal />
      <div className=" mt-8 ml-16  mx-auto px-28 shadow-lg py-12">
        <div className="">
          {game ? (
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="md:w-2/3">
                <img
                  src={game.imagen}
                  alt={game.nombre}
                  className="md:w-[90%] rounded-lg md:h-[550px]"
                />
              </div>
              <div className="md:w-1/2 ">
                <h2 className="text-4xl text-white font-semibold mb-4">
                  {game.nombre}
                </h2>
                <p className="mb-4 mt-2 text-white">{game.descripcion}</p>
                <p className="mb-4 text-white">Precio: ${game.precio}</p>
                <p className="mb-4 text-white ">Disponibles: {game.stock}</p>
                <div className="flex md:flex-row items-center gap-1">
                  <p className="mb-4 text-white">Genero:</p>
                  <p className="mb-4 text-white border-[1px] px-4 ml-4 ">
                    {game.genders[0].genero}
                  </p>
                </div>

                <div className="flex md:flex-row flex-col  items-center">
                  <p className="mb-4 text-white">Plataforma:</p>{" "}
                  <img
                    className="w-[20%] rounded-[50px] ml-5 mb-3"
                    src={game.platforms[0].logo}
                    alt
                  />
                </div>

                <button
                  class="middle none center mr-4  rounded-lg bg-green-500 py-3 px-9 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  onClick={() => buyProdut(id, game.nombre, game.precio)}
                >
                  Comprar
                </button>
                <button
                  class="middle none center rounded-lg bg-orange-500 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  onClick={() => addCard(id)}
                >
                  Agregar Al Carrito
                </button>
                <img className="mt-2" src={img} alt="" />
                <img className="mt-3 rounded-lg" src={img2} alt="" />
              </div>
            </div>
          ) : (
            <div className="flex justify-center flex-col items-center gap-10">
              <p className="text-white text-[20px]">
                Cargando detalles del juego...
              </p>
              <svg
                role="status"
                class="inline h-8 w-8 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}
        </div>
        <h3 className="text-white font-secundary text-center mb-5 mt-10 text-[40px]">
          Trailer
        </h3>
        <div className="w-full">
          {game && game.trailer && (
            <iframe
              width="100%"
              height="415"
              src={game.trailer}
              title="Trailer"
              frameborder="0"
              allowfullscreen
            />
          )}
        </div>
        <div className="flex justify-center mt-5">
          <Link to={"/Home"}>
            <button
              type="button"
              class="border border-teal-500 px-16 bg-teal-500 text-white rounded-md py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
              Volver
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
