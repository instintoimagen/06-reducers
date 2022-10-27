import { TYPES } from "../actions/contadorActions";

export const counterInitialState = { count: 0 };

export const counterInit = (initialState) => {
  return { count: initialState.count + 100 };
};

export function reducerCounter(state, action) {
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
      return counterInitialState;

    default:
      return state;
  }
}
