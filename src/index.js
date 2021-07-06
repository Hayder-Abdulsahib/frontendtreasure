import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { applyMiddleware, compose } from "redux"; //we add this
import thunk from "redux-thunk"; //we add this
import { Provider } from "react-redux";

import rootReducer from "./store/reducers/rootReducer";
// import { treasuareList } from "./store/actions/treasureActions";
import { garbageList } from "./store/actions/garbageActions";
import { checkForToken } from "./store/actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //we changed and added this

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);

// store.dispatch(treasuareList());
store.dispatch(garbageList());
store.dispatch(checkForToken());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
