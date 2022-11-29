// initial state
const initialState = {
  value: 0,
};

// create reducer function
// reducer fuction take current state and action

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "increment") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}
