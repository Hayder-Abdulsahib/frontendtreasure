import { SET_USER } from "../actions/authActions";

const initialState = {
  user: null,
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        // loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
