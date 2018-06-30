import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <div>
          <span className="gameinfo">
            <p className="gamename">Call of Duty Black Ops II</p>
            <p className="gamecompany">Activison</p>
          </span>
        </div>
        <div>
          <span className="gameinfo">
            <p className="gamename">Call of Duty Black Ops III</p>
            <p className="gamecompany">Activison</p>
          </span>
        </div>
        <div>
          <span className="gameinfo">
            <p className="gamename">Assassins Creed</p>
            <p className="gamecompany">Ubisoft</p>
          </span>
        </div>
        <div>
          <span className="gameinfo">
            <p className="gamename">Borderlands</p>
            <p className="gamecompany">Gearbox Software & 2K Games</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
