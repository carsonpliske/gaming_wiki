import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "../App.css";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
