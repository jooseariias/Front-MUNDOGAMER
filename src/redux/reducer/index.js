import {
  LOGIN_SUCCESS,
  GET_CARD,
  PRODUCT_DETAILS_SUCCESS,
  GET_USERS,
  LOGIN_FAILURE,
  LOGOUT,
  POST_REGISTER,
  DATA_GAMES,
  GET_GENERS,
  DELETE_CARD,
  POST_CARD,
} from "../actions/index";

const initialState = {
  user: [],
  games: [],
  geners: [],
  details: [],
  users: [],
  carrito: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case POST_REGISTER:
      return {
        ...state,
      };
    case DATA_GAMES:
      return {
        games: action.payload,
      };
    case GET_GENERS:
      return {
        geners: action.payload,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        details: action.payload,
      };
    case GET_CARD:
      return {
        ...state,
        carrito: action.payload,
      };
    case DELETE_CARD:
      return {
        ...state,
        carrito:action.payload
      };
      case POST_CARD:
        return {
          ...state,
          carrito: [
            ...state,
            {
              userId: action.payload.userId,
              productId: action.payload.productId,
            },
          ],
        };
    default: {
      return state;
    }
  }
}

export default rootReducer;
