import React, { Component } from "react";
import styled from "styled-components";

class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <p> This is the about page </p>
      </AboutWrapper>
    );
  }
}
const AboutWrapper = styled.div`
  padding: 50px;
`;

export default About;
