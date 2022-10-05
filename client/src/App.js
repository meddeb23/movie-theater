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
import ScrollToTop from "./assets/components/ScrollToTop";
import Resualt from "./assets/screen/Resualt";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Resualt} />
        <Route path="/movie/:id" exact component={DetailPage} />
        <Route path="/tv/:id" exact component={SerieDetail} />
        <Redirect from="/*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
