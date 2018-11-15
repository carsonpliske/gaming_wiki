import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import BlackOps2 from "./pages/BlackOps2";
import BlackOps3 from "./pages/BlackOps3";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blackops2" component={BlackOps2} />
          <Route path="/blackops3" component={BlackOps3} />
        </div>
      </Router>
    );
  }
}

export default App;
