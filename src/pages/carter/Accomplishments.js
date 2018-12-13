import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/carter1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Jimmy Carter:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>1768 election</Subhead>
        <Text>
          <Date>2/02/1977: Emergency Natural Gas Act</Date>Congress passes
          Emergency Natural Gas Act, authorizing the President to deregulate
          natural gas prices due to a shortage in supply. Carter signs the bill
          and announces plans to present an energy program to Congress. He later
          proposes the establishment of a cabinet-level Department of Energy.
          <Date>06/07/1979: MX missile approved</Date>Carter approves
          development of the MX missile.
          <Date>06/18/1979: Strategic Arms Limitation Treaty</Date>
          Carter signs the second Strategic Arms Limitation Treaty (SALT II)
          with the USSR. The U.S. Senate never ratifies the controversial
          treaty, although both nations voluntarily comply with its terms.
          <Date>10/17/1979: Department of Education established</Date>Carter
          signs a bill establishing the Department of Education and appoints
          Shirley Hufstedler as its secretary.
          <Date>07/25/1980: Limiting nuclear war</Date>Carter signs Presidential
          Directive 59 advocating a strategy for fighting a “limited” nuclear
          war.
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
