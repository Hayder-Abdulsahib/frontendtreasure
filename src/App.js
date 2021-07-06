import "./App.css";

import { Route, Switch } from "react-router";
import Home from "./components/Home";
import TreasureList from "./components/TreasureList";
import GarbageList from "./components/GarbageList";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/treasures">
          <TreasureList />
        </Route>
        <Route path="/garbage">
          <GarbageList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
