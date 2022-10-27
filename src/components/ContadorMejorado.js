import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  reducerCounter,
  counterInitialState,
  counterInit,
} from "../reducers/contadorReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    reducerCounter,
    counterInitialState,
    counterInit
  );

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div className="contador">
      <h2>Contador MEJORADO con Reducer</h2>
      <nav>
        <button onClick={sumar}>➕</button>
        <button onClick={sumar5}>➕5️⃣</button>
        <button onClick={reset}>⭕</button>
        <button onClick={restar}>➖</button>
        <button onClick={restar5}>➖5️⃣</button>
      </nav>
      <h3>{state.count}</h3>
      <span>
        <strong>useReducer</strong>. Con tres parámetros:
        <br />
        <strong>
          useReducer( reducerCounter, counterInitialState, counterInit )
        </strong>
      </span>
    </div>
  );
};

export default ContadorMejorado;
