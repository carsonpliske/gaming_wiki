import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Menu extends Component {
  render() {
    return (
      <TopMenuPosition>
        <MenuWrapper>
          <MenuItem>
            <MenuLink to="johnson-bio">Bio</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="johnson-accomplishments">Accomplishments</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="johnson-events">Events</MenuLink>
          </MenuItem>
        </MenuWrapper>
      </TopMenuPosition>
    );
  }
}

const TopMenuPosition = styled.div`
  justify-self: end;
`;

const MenuWrapper = styled.ul`
  position: relative;
  top: 9px;
  right: 10px;
`;

const MenuItem = styled.li`
  display: inline-block;
  list-style-type: none;
  margin-left: 15px;
  padding: 0px;
  background-color: #ccc;
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #aaa;
    box-shadow: 0px 2px 12px rgb(90, 89, 89);
  }
`;

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 15px;
  display: inline-block;
`;

export default Menu;
