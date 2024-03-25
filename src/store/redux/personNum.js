import * as types from "../action-types";

let initVal = {
  num: 100,
  opp: 33,
  agree: 67,
};

export default function personNumReducer(state = initVal, action) {
  state = structuredClone(state);
  switch (action.type) {
    case types.SUM_AGREE:
      state.agree++;
      state.num++;
      break;
    case types.SUM_OPPOSE:
      state.opp++;
      state.num++;
      break;
    default:
  }
  return state;
}
