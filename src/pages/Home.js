import React, { Component } from "react";
import styled from "styled-components";
import codbo2 from "../images/codbo2.jpg";
import codbo3 from "../images/codbo3.jpg";
import assassin from "../images/assassinscreed.jpg";
import borderlands from "../images/borderlands.jpg";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <GameBlock>
          <GameInfo>
            <GameName>Call of Duty Black Ops II</GameName>
            <GameCompany>Activison</GameCompany>
          </GameInfo>
        </GameBlock>
        <GameBlock>
          <GameInfo>
            <GameName>Call of Duty Black Ops III</GameName>
            <GameCompany>Activison</GameCompany>
          </GameInfo>
        </GameBlock>
        <GameBlock>
          <GameInfo>
            <GameName>Assassins Creed</GameName>
            <GameCompany>Ubisoft</GameCompany>
          </GameInfo>
        </GameBlock>
        <GameBlock>
          <GameInfo>
            <GameName>Borderlands</GameName>
            <GameCompany>Gearbox Software & 2K Games</GameCompany>
          </GameInfo>
        </GameBlock>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  padding: 50px;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

const GameBlock = styled.div`
  border: 1px grey solid;
  height: 440px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  &:nth-child(1) {
    background: url(${codbo2});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 8px rgb(90, 89, 89);
  }
  &:nth-child(2) {
    background: url(${codbo3});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 8px rgb(90, 89, 89);
  }
  &:nth-child(3) {
    background: url(${assassin});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 8px rgb(90, 89, 89);
  }
  &:nth-child(4) {
    background: url(${borderlands});
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 8px rgb(90, 89, 89);
  }
`;

const GameInfo = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

const GameName = styled.p`
  color: gold;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
  padding: 0;
`;

const GameCompany = styled.p`
  color: white;
  margin: 5px;
  padding: 0;
`;

export default Home;
