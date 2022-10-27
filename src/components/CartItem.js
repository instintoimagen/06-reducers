const CartItem = ({ data, delFromCart, addToCart }) => {
  // de lo recibido arriba en "data", que destructure en una variable los "id", "name", y "price"
  let { id, name, price, quantity } = data;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{quantity} - </td>
            <td>{name} - </td>
            <td>
              ${price} │ ${price * quantity}
            </td>
            <td>
              <button onClick={() => addToCart(id)} className="btn-rojo">
                + 1
              </button>
              <button onClick={() => delFromCart(id)} className="btn-rojo">
                - 1
              </button>
              {/* Si pasamos el segundo parámetro "true", se ejecuta la acción de eliminar todos (parámetro "all" en true) */}
              <button
                onClick={() => delFromCart(id, true)}
                className="btn-rojo"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
