import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/gw-logo.png";
import TopMenu from "./TopMenu";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </div>
        <TopMenu />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  background-color: rgba(238, 238, 238, 0.993);
  height: 100px;
  padding: 20px;
  color: rgb(0, 0, 0);
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Logo = styled.img`
  width: 220px;
  position: relative;
  top: -7px;
`;

export default Header;
