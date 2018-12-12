import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/gw-logo.png";
import TopMenu from "./TopMenu";
import blackops2header from "../images/blackops2header.jpg";
import blackops3header from "../images/blackops3header.png";
import assassinscreedheader from "../images/assassinscreedheader.jpg";
import borderlandsheader from "../images/borderlandsheader.jpg";

function styleHeader(theme) {
  switch (theme) {
    case "blackops2":
      return (
        <HeaderWrapperbo2>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <TopMenu />
        </HeaderWrapperbo2>
      );
    case "blackops3":
      return (
        <HeaderWrapperbo3>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <TopMenu />
        </HeaderWrapperbo3>
      );
    case "assassins":
      return (
        <HeaderWrapperassassins>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <TopMenu />
        </HeaderWrapperassassins>
      );
    case "borderlands":
      return (
        <HeaderWrapperborderlands>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <TopMenu />
        </HeaderWrapperborderlands>
      );
    default:
      return (
        <HeaderWrapper>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <TopMenu />
        </HeaderWrapper>
      );
  }
}

class Header extends Component {
  render() {
    const { theme } = this.props;
    return styleHeader(theme);
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

const HeaderWrapperbo2 = styled.div`
  background: url(${blackops2header});
  height: 100px;
  padding: 20px;
  color: rgb(0, 0, 0);
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeaderWrapperbo3 = styled.div`
  background: url(${blackops3header});
  height: 100px;
  padding: 20px;
  color: rgb(0, 0, 0);
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const HeaderWrapperassassins = styled.div`
  background: url(${assassinscreedheader});
  height: 100px;
  padding: 20px;
  color: rgb(0, 0, 0);
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const HeaderWrapperborderlands = styled.div`
  background: url(${borderlandsheader});
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
