import { TREASUARE_LIST } from "../actions/treasureActions";
const initialState = {
  treasures: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TREASUARE_LIST:
      return {
        ...state,
        treasures: action.payload,
        // loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
