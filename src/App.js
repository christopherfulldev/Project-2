import "./App.css";
import Home from "./Components/Home";
import Cards from "../src/Components/Cards/index";
import "./App.css";
import NavBar from "./Components/NavBar";
import React from "react";
import { Switch, Route } from "react-router-dom";

const App = (props) => {
  // componentDidMount (
  //  newRequest()
  //)

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
