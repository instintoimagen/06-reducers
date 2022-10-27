import { useReducer } from "react";

const initialState = { count: 0 };

const init = (initialState) => {
  return { count: initialState.count + 100 };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { count: state.count + 1 };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };

    case TYPES.DECREMENT:
      return { count: state.count - 1 };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };

    case TYPES.RESET:
      return initialState;

    default:
      return state;
  }
}

const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  //const sumar = () => dispatch({ type: "INCREMENT" });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  // con el teclado, pero no funciona si no se ha clickeado previamente en algún botón
  const handleTec = (e) => {
    switch (e.code) {
      case "NumpadAdd":
        return sumar();

      case "NumpadSubtract":
        return restar();

      case "Numpad5":
        return sumar5();

      case "Numpad0":
        return reset();

      default:
        break;
    }
  };

  return (
    <div className="contador" onKeyDown={handleTec}>
      <h2>Contador con Reducer</h2>
      <nav>
        <button onClick={sumar}>➕</button>
        <button onClick={sumar5}>➕5️⃣</button>
        <button onClick={reset}>⭕</button>
        <button onClick={restar}>➖</button>
        <button onClick={restar5}>➖5️⃣</button>
      </nav>
      <h3>{state.count}</h3>
      <span>
        Este contador utiliza <strong>useReducer</strong>. Con dos parámetros:
        <br />
        <strong>useReducer( reducer, initialState);</strong>
      </span>
    </div>
  );
};

export default Contador;
