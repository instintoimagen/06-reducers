import { TYPES } from "../actions/crudActions";

export const crudInitialState = {
  db: null,
};

export function crudReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      //console.log(action.payload);
      return {
        //usamos spread operator para hacer una copia del estado actual y mezclarlo, en la propiedad "db" del estado. Cada uno de los datos que traiga la respuesta pedida con ese action, como es la primera respuesta, de cada uno de los datos pedimos que genere un nuevo valor, por eso el: (data =>data) en un map
        ...state,
        db: action.payload.map((data) => data),
      };
    }
    case TYPES.CREATE_DATA: {
      // console.log(action.payload);
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }
    case TYPES.UPDATE_DATA: {
      // console.log(action.payload);

      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.DELETE_DATA: {
      // console.log(action.payload);

      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }
    case TYPES.NO_DATA:
      return crudInitialState;
    default:
      return state;
  }
}
