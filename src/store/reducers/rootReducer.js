import { combineReducers } from "redux";
import garbageReducer from "./garbageReducer";
import treasureReducer from "./treasureReducer";
import authReducer from "./authReducer";

// import authReducer from "./authReducer";

const rootReducer = combineReducers({
  garbages: garbageReducer,
  treasures: treasureReducer,
  auth: authReducer,
});

export default rootReducer;
