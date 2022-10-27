const Total = ({ total, confirmOrder, clearCart }) => {
  return (
    <>
      <div className="div-cart-total">
        <h3>Total</h3>
        <h2>$ {total}</h2>
      </div>
      <div className="div-total-btn">
        <button className="btn-azul" onClick={clearCart}>
          Limpiar Carrito
        </button>
        <button className="btn-azul" onClick={confirmOrder}>
          Confirmar
        </button>
      </div>
    </>
  );
};

export default Total;
