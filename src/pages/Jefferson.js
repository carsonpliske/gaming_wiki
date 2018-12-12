import React, { Component } from "react";
import styled from "styled-components";

class Jefferson extends Component {
  componentDidMount() {
    this.props.changeHeader("Thomas Jefferson");
  }
  render() {
    return (
      <AboutWrapper>
        <Headline className={this.props.header}>Thomas Jefferson</Headline>
        <Text>
          {" "}
          This is the This is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageThis is the
          about pageThis is the about pageThis is the about pageabout page{" "}
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
  font-size: 75px;
`;

const Text = styled.p`
  font-size: 19px;
`;

export default Jefferson;
