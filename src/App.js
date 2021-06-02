import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Test components
import Test from "./components/Test";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
