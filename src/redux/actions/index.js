export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const POST_REGISTER = "POST_REGISTER";
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const DATA_GAMES = "DATA_GAMES";
export const GET_GENERS = "GET_GENERS";
export const GET_PLATAFORM = "GET_PLATAFORM";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";
export const GET_USERS = "GET_USUERS";
export const GET_CARD = "GET_CARD";
export const POST_CARD = "POST_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const COMPRAR_PRODUCTO_SUCCESS = 'COMPRAR_PRODUCTO_SUCCESS';
export const COMPRAR_PRODUCTO_FAILURE = 'COMPRAR_PRODUCTO_FAILURE'
import Cookies from "js-cookie";
import axios from "axios";

const  URL_BACK  = "http://localhost:3001"

export const loginSuccess = (user) => {
  const userJSON = JSON.stringify(user);
  Cookies.set("user", userJSON, { expires: 7 });
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// GET A TODOS LOS USUSARIOS
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BACK}/User/users`);
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };
};

/// POST REGISTER
export function PostRegister() {
  return async function (dispatch) {
    let json = await axios.post(`${URL_BACK}/auth/registrarse`);
  
    return dispatch({
      type: POST_REGISTER,
      payload: json,
    });
  };
}
/// POST LOGIN
export const LoginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${URL_BACK}/auth/login`, userData);
    const userJSON = JSON.stringify(response.data.usuario);
    Cookies.set("user", userJSON, { expires: 7 });
    if (response.status === 200) {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
      
      window.location.href = "/home";
    } else {
      dispatch({
        type: REGISTER_USER_FAILURE,
        payload: "No se a encontrado usuario",
      });
    }
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, payload: "Error en el login " });
  }
};
//GET GAMES
export const getGames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BACK}/producto`);
      dispatch({
        type: DATA_GAMES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };
};
export const getgeners = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BACK}/genero`);
      dispatch({
        type: GET_GENERS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching geners:", error);
    }
  };
};

// detalles del producto
export const getProductDetails = (productId) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL_BACK}/${productId}`);
    dispatch({
      type: "PRODUCT_DETAILS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_DETAILS_FAIL",
      payload:
        error.response.data.message ||
        "Error al obtener los detalles del producto",
    });
  }
};

//GET CARRITO

export const getAllCard = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BACK}/carrito/get/${id}`);
      dispatch({
        type: GET_CARD,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetch favorit:", error);
    }
  };
};

//Post CARRITO
export const addToCard = (userId, productId) => async (dispatch) => {
  try {
    const response = await axios.post(`${URL_BACK}/carrito/Post`, {
      userId,
      productId,
    });
    if (response.status === 201) {
      dispatch({
        type: POST_CARD,
        payload: { userId, productId },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

//delete CARRITO // actions.js

export const deletecard = (Id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${URL_BACK}/carrito/Delete/${Id}`);
    if (response.status === 200) {
      dispatch({
        type: DELETE_CARD,
        payload: Id,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
export const buyProduct = (productoData, idUser) => async (dispatch) => {
  try {
    const response = await axios.post(`${URL_BACK}/Mp/comprar`, {
      producto: productoData,
      idUser,
    });
    if (response.status === 200) {
      window.open(response.data.payment_url, "_blank");
    } else {
      dispatch({
        type: COMPRAR_PRODUCTO_FAILURE,
        payload: "No se pudo realizar la compra",
      });
    }
  } catch (error) {
    dispatch({ type: COMPRAR_PRODUCTO_FAILURE, payload: "Solicitud inválida" });
  }
};
