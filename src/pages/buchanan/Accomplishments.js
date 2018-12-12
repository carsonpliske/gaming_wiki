import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/washington-frown.jpg";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>James Buchanan:</Headline>
        <Topic>Accomplishments</Topic>
        <Text>
          EVENTS is the This is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageabout page
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>1768 election</Subhead>
        <Text>
          EVENTS is the This is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageabout page
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

export default Accomplishments;
