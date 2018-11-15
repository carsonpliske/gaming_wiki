import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import codbo2 from "../images/codbo2.jpg";
import codbo3 from "../images/codbo3.jpg";
import assassin from "../images/assassinscreed.jpg";
import borderlands from "../images/borderlands.jpg";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <StyledLink to="/blackops2">
          <GameBlock style={codbo2Image}>
            <GameInfo>
              <GameName>Call of Duty Black Ops II</GameName>
              <GameCompany>Activison</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/blackops3">
          <GameBlock style={codbo3Image}>
            <GameInfo>
              <GameName>Call of Duty Black Ops III</GameName>
              <GameCompany>Activison</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/blackops2">
          <GameBlock style={assassinImage}>
            <GameInfo>
              <GameName>Assassins Creed</GameName>
              <GameCompany>Ubisoft</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/blackops2">
          <GameBlock style={borderlandsImage}>
            <GameInfo>
              <GameName>Borderlands</GameName>
              <GameCompany>Gearbox Software & 2K Games</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>
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
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  transition: all 0.3s ease-in-out;
  border: 1px grey solid;
  height: 440px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
}`;

const codbo2Image = {
  backgroundImage: `url(${codbo2})`
};

const codbo3Image = {
  backgroundImage: `url(${codbo3})`
};

const assassinImage = {
  backgroundImage: `url(${assassin})`
};

const borderlandsImage = {
  backgroundImage: `url(${borderlands})`
};

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

const StyledLink = styled(Link)`
  transition: all 0.2s ease;

  box-shadow: 0px 2px 0px rgb(0, 0, 0);

  &:hover {
    box-shadow: 0px 2px 40px rgb(0, 0, 0);
    transition: all 0.2s ease;
  }
`;

export default Home;
