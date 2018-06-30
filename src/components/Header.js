import React, { Component } from "react";
import "../App.css";
import Menu from "./Menu";

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <div>logo</div>
        <Menu />
      </div>
    );
  }
}

export default Header;
