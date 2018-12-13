import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/h_harrison1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>William H. Harrison:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The liberties of a people depend on their own constant attention to
          its preservation."
        </Subhead>
        <Text>
          <Date>03/04/1841: William Henry Harrison inaugurated</Date>
          William Henry Harrison inaugurated as the ninth President of the
          United States.
          <Date>4/04/1841: Harrison dies of pneumonia</Date> Harrison dies of
          pneumonia only one month after his inauguration, making him the first
          President to die while in office.
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

const Text = styled.p`
  font-size: 19px;
`;

export default Accomplishments;
