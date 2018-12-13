import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/gw-logo.png";
import flag from "../images/flag.jpg";

class Header extends Component {
  render() {
    const { theme } = this.props;
    return (
      <HeaderFlag>
        <Link to="/">
          <Screen />
          <Title>UNITED STATES PRESIDENTS</Title>
        </Link>
      </HeaderFlag>
    );
  }
}

const HeaderFlag = styled.div`
  position: relative;
  background: url(${flag});
  background-size: cover;
  background-position: center;
  height: 100px;
  padding: 0px;
  color: rgb(0, 0, 0);
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  a {
    text-decoration: none;
  }
`;

const Screen = styled.div`
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Title = styled.h2`
  position: relative;
  z-index: 3;
  text-align: center;
  color: #fccd84;
  font-family: Geneva, Times, serif;
  letter-spacing: 4px;
  font-size: 30px;
  margin: 0;
  padding-top: 30px;
`;

const Logo = styled.img`
  width: 220px;
  position: relative;
  top: -7px;
`;

export default Header;
