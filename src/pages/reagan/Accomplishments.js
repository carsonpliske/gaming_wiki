import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/reagan1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Ronald Reagan:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Government exists to protect us from each other. Where government has
          gone beyond its limits is in deciding to protect us from ourselves.”
        </Subhead>
        <Text>
          <Date>08/13/1981: Cutting taxes</Date>Reagan signs a tax cut into law.
          <Date>09/03/1982: Tax Equity and Fiscal Responsibility Act</Date>
          Reagan signs the Tax Equity and Fiscal Responsibility Act (TEFRA).
          <Date>04/20/1983: Social Security reform becomes law</Date>
          Ford signs the Privacy Act of 1974, ensuring the right of Americans to
          individual privacy.
          <Date>10/22/1986: Tax code revised</Date>Reagan signs a revision of
          the tax code into law.
          <Date>02/03/1987: Water Quality Control Act</Date>Congress overrides
          Reagan's veto of the Water Quality Control Act, allowing the EPA to
          regulate pollutants in U.S. waters.
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
