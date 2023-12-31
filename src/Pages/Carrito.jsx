import HeaderGlobal from "../components/headerGlobal/HeaderGlobal";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCard, deletecard,buyProduct } from "../redux/actions/index";
import { User } from "../Hooks/dataUser";
export default function Carrito() {
  const dispatch = useDispatch();
  const dataCard = useSelector((state) => state?.carrito);
  const [carrit, setCarrit] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = User();
  const idUser = userData.id;

  useEffect(() => {
    if (idUser) {
      dispatch(getAllCard(idUser));
    }
  }, [dispatch, idUser]);

  useEffect(() => {
    if (Array.isArray(dataCard)) {
      const carritoConPreciosNumeros = dataCard.map((item) => ({
        ...item,
        product: {
          ...item.product,
          precio: parseFloat(item.product.precio), 
        },
      }));
      setCarrit(carritoConPreciosNumeros);
    }
    setLoading(false);
  }, [dataCard]);

  const HandleDelete = (id) => {
    setCarrit((prevCarrit) => prevCarrit.filter((item) => item.id !== id));
    dispatch(deletecard(id));
  };
  const calcularPrecioTotal = () => {
    if (Array.isArray(carrit)) {
      const totalPrice = carrit.reduce(
        (total, item) => total + item.product.precio,
        0
      );
      return totalPrice.toFixed(2); 
    }
    return 0;
  };

  const handleCompraCarrito = () => {
    const productosEnCarrito = carrit.map((item) => ({
      productoData: {
        id: item.product.id, 
        nombre:item.product.nombre,
        precio:item.product.precio
      },
      idUser,
    }));
    dispatch(buyProduct(productosEnCarrito))
  };
  return (
    <div>
      <HeaderGlobal />
      <section className="">
        {loading ? (
          <p className=" ml-[50%] w-[50px] mt-10">
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
          </p>
        ) : carrit.length > 0 ? (
          <section>
            {carrit.map((e) => {
              return (
                <div key={e.id}>
                  <div className="flex shadow-lg justify-between mt-8 items-center p-2">
                    <div>
                      <img
                        className="w-[90px] h-[127px]"
                        src={e.product.imagen}
                        alt="img-product"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <label className="text-white font-secundary">
                        Precio
                      </label>
                      <p className=" font-bold text-white">
                        {e.product.precio}
                      </p>
                    </div>

                    <div className="flex flex-col items-center">
                      <label className="text-white font-secundary">
                        Año.P{" "}
                      </label>
                      <p className=" font-bold text-white">{e.product.year}</p>
                    </div>

                    <div className="flex flex-col items-center">
                      <label className="text-white font-secundary">
                        Disponible
                      </label>
                      <p className=" font-bold text-white">{e.product.stock}</p>
                    </div>

                    <button
                      onClick={() => HandleDelete(e.id)}
                      className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      data-ripple-light="true"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-end mt-8 mr-2">
                <p className="text-white font-secundary text-xl">
                  Total: ${calcularPrecioTotal()}
                </p>
              </div>
            <div className="flex justify-end mt-8 mr-2">
              <button
                onClick={ ()=>handleCompraCarrito()}
                className="before:ease relative rounded-lg h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40"
              >
                <span relative="relative z-10">Comprar Carrito</span>
              </button>
            </div>
          </section>
        ) : (
          <section>
            <p className="text-white font-secundary mt-8 ml-5 text-[30px]">
              No Hay Productos En El Carrito
            </p>
          </section>
        )}
      </section>
    </div>
  );
}
