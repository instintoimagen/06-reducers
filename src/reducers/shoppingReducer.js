import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1000, name: "Lapiz común", price: 100 },
    { id: 1001, name: "Lapiz dibujo", price: 110 },
    { id: 1002, name: "Lapiz color", price: 135 },
    { id: 1003, name: "Cuaderno 24 hojas", price: 160 },
    { id: 1004, name: "Cuaderno 48 hojas", price: 200 },
    { id: 1005, name: "Hojas de dibujo", price: 250 },
    { id: 1006, name: "Acuarelas", price: 270 },
    { id: 1007, name: "Juego de pinceles", price: 310 },
    { id: 1008, name: "Carpeta de dibujo", price: 345 },
    { id: 1009, name: "Kit Marcadores", price: 455 },
    { id: 1010, name: "Papel de dibujo x100", price: 990 },
  ],
  cart: [],
  total: 0,
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      //var newItem, esta acción recibe un id, buscamos en la lista de productos el id que nos están mandando, y si coincide en alguno de los prod que tenemos en nuestra lista, la info del prod se guarda en la var newItem.
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // Para contar cantidad: nos metemos al arreglo del carrito, si uno de los item coincide con el id que está queriendo ingresar el usuario, lo almacenamos en la var itemExistCart.
      let itemExistCart = state.cart.find((item) => item.id === newItem.id);
      // si lo de arriba no coincide itemExistCart será null. Entonces con un op ternario: si el item ya existe en el carrito, duplico el estado, con (...), y en la propiedad cart, evalúo que el elemento que coincide con el id del nuevo item, en su propiedad quantity le agrego una unidad. Caso contrario (:) hago una copia del estado, con (...), y en su propiedad cart agrego como nuevo elementento, y como es la primera vez, le inicializo la propiedad quantity en valor uno.

      return itemExistCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      // buscar dentro del estado, en el carrito, encuentra si el "id" existe dentro del carrito para eliminarlo. Entonces le pasamos un "item" (por cada item evalua que sea exactamente igual al action.payload que es el id que envía el usuario al clickear)
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      // Para evitar cantidades negativas, al borrar de a uno: Si la cantidad (del objeto itemToDelete) es mayor a una unidad, lo restamos de quantity, si es cero eliminamos el producto del carrito.
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    case TYPES.TOTAL: {
      let Total = 0;
      // cada elemento en el carrito (que es un arrglo), lo recorro para acumular en la var "Total" el producto de price por quantity. Luego retorno: tomo state y al elemento "total" le asigno lo acumulado en la var "Total"
      state.cart.forEach((el) => (Total += el.price * el.quantity));
      return { ...state, total: Total };
    }
    case TYPES.CONFIRM: {
      alert("ABRIR CHECKOUT");
      return state;
    }

    default:
      return state;
  }
}
