import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/washington-frown.jpg";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George Washington:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Washington's mother was Mary Ball and his father was Augustine
          Washington. They owned a plantation with slaves in Virginia. George
          studied at local schools in Fredericksburg, and was also homeschooled
          for part of his life. George's mother was unfit to care for him and
          his father died when he was 11 years old.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>1768 election</Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> February 22, 1732 Westmoreland County,
            Virgina, British America
          </Item>

          <Item>
            <strong>Died:</strong> December 14, 1799 Mount Vernon, Virginia, USA
          </Item>

          <Item>
            <strong>Political Party:</strong> None
          </Item>

          <Item>
            <strong>In Office:</strong> April 30, 1789 - March 3, 1797
          </Item>
        </Text>
      </AboutWrapper>
    );
  }
}
const AboutWrapper = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const Item = styled.p`
  position: relative;
  padding: 10px 0;
  border-top: #ccc 1px solid;
  margin: 0;
  &:first-of-type {
    border-top: none;
  }
`;
const Headline = styled.h1`
  font-size: 50px;
  line-height: 30px;
`;
const Topic = styled.h1`
  font-size: 50px;
  color: #999;
  line-height: 40px;
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Subhead = styled.h3`
  font-size: 24px;
  border-bottom: 1px solid;
`;

const Text = styled.p`
  font-size: 19px;
`;

export default Bio;
