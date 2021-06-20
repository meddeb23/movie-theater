import React from "react";
import "./assets/style/main.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/footer";

import Home from "./assets/screen/Home";
import DetailPage from "./assets/screen/DetailPage";
import SerieDetail from "./assets/screen/SerieDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" exact component={DetailPage} />
        <Route path="/tv/:id" exact component={SerieDetail} />
        <Redirect from="/*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
