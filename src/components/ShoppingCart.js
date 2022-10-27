import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import Total from "./Total";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  // traigo los productos y el contenido del carrito destructurando la var de estado, que a la vez la traigo del archivo shoppingReducer.js
  const { products, cart } = state;
  //console.log(cart);
  const calcTotal = () => {
    dispatch({ type: TYPES.TOTAL });
  };
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    calcTotal();
  };

  // Para eliminiar recibe el id del producto, y si se recibe "all" en true se borra todo. "all" se inicia en false
  const delFromCart = (id, all = false) => {
    // Si "all" es true mandamos al dispatch
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      calcTotal();
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      calcTotal();
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    calcTotal();
  };
  const confirmOrder = () => {
    dispatch({ type: TYPES.CONFIRM });
    dispatch({ type: TYPES.CLEAR_CART });
  };

  /* let total = 0;
  cart.forEach((el) => (total += el.price * el.quantity));
  console.log(state.total); */

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      {cart.length !== 0 && (
        <>
          <h3>Carrito</h3>
          <article className="box-cart">
            {
              //cart es un arreglo que trae los items del carrito. Mientras tenga items que despliegue el componente "CartItem" pasándole key y data.
              cart.map((item, index) => (
                <CartItem
                  key={index}
                  data={item}
                  delFromCart={delFromCart}
                  addToCart={addToCart}
                />
              ))
            }
            {/* {cart.length !== 0 && (
              <>
                <div className="cart-total">
                  <h3>Total</h3>
                  <h2>$ {total}</h2>
                </div>
              </>
            )} */}
            {cart.length !== 0 && (
              <Total
                total={state.total}
                confirmOrder={confirmOrder}
                clearCart={clearCart}
              />
            )}
          </article>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
