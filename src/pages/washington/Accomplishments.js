import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/washington-frown.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George Washington:</Headline>
        <Topic>Accomplishments</Topic>
        <Photo src={somename} alt="washiongton" />
        <Subhead>“It is better to offer no excuse than a bad one.”</Subhead>
        <Text>
          <Date>03/26/1790: First naturalization law</Date>
          Congress passes the United States' first naturalization law,
          establishing terms of citizenship.
          <Date>05/31/1790: Copyright law</Date> President Washington signs the
          first United States copyright law.
          <Date>07/16/1790: Establishing the capital</Date>President Washington
          signs a bill into law that permanently places the nation's capital
          along the Potomac River, in an area to be called the District of
          Columbia.<Date>03/03/1791: First revenue law</Date>
          Congress approves its first internal revenue law, creating fourteen
          revenue districts and placing a tax on all distilled spirits.
          <Date>10/27/1795: Treaty of San Loreqnzo</Date>The United States signs
          the Treaty of San Lorenzo with Spain, granting Americans the right to
          ship goods through the port of New Orleans without having to pay
          duties to the Spanish Government.
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
