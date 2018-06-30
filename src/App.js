import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import logo from "./GWPICTURE.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App-header">
            <div>
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>
            <div className="top-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
