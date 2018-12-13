import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/quincyadams1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Quincy Adams:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Courage and perseverance have a magical talisman, before which
          difficulties disappear and obstacles vanish into air.”
        </Subhead>
        <Text>
          <Text>
            <Date>10/26/1825: Erie Canal Completed</Date>
            The first passage on the 363 mile-long Erie Canal is completed from
            Lake Erie to New York City, linking the Atlantic and trans-Atlantic
            marketplaces with growing agricultural production in the Northwest
            states. Construction of the canal began in 1817. During his
            presidential term, Adams strongly supports national planning of and
            the use of national funds for an improved transportation
            infrastructure.
            <Date>03/1827: Ports closed to British</Date> Adams proclaims all
            American ports closed to trade with British colonies, suspending
            disagreements from an era of protracted contention with the British
            over tariffs, navigation and duties. Adams's declaration embodies
            his response to a rising Continental cartel of exclusive trading
            relationships.
            <Date>05/11/1828: Tariff of Abominations</Date>Proposed by South
            Carolinian and Vice President John Calhoun in an attempt to bolster
            support for Andrew Jackson's bid for President, Congress passes a
            new tariff bill. The plan calls for incredibly high tariffs on raw
            materials to accommodate Western interests and on British woolens to
            appease New England interests. Calhoun believed Jackson supporters
            in the Northeast would back the bill while Jackson men in the South
            and Southwest, generally opposed to protectionism, would oppose it;
            he expects the bill to fail. The Tariff angers many, including the
            Virginia state legislature, which terms the law the “Tariff of
            Abominations.” The bill's passage effectively ends Adams's hopes for
            reelection and increases support for Jackson who appears as a
            free-trade advocate to the South and a protectionist to the North.
            Calhoun, meanwhile, anonymously pens the South Carolina Exposition
            and Protest, which advocates a state's right to nullify federal laws
            which it opposes and deems unconstitutional.{" "}
          </Text>
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
