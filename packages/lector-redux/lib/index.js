import { ask } from "lector";

const getState = ask.prop("state");
const getDispatch = ask.prop("dispatch");

function dispatch(action) {
  return getDispatch.then(dispatch => dispatch(action));
}

export { getState, dispatch };
