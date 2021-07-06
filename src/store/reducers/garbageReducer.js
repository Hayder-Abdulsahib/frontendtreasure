import { GARBAGE_LIST } from "../actions/garbageActions";
const initialState = {
  garbages: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GARBAGE_LIST:
      return {
        ...state,
        garbages: action.payload,
        // loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
