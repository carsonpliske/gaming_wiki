import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/quincyadams1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Quincy Adams:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Courage and perseverance have a magical talisman, before which
          difficulties disappear and obstacles vanish into air.”
        </Subhead>
        <Text>
          <Date>10/26/1825: Erie Canal Completed</Date>
          The first passage on the 363 mile-long Erie Canal is completed from
          Lake Erie to New York City, linking the Atlantic and trans-Atlantic
          marketplaces with growing agricultural production in the Northwest
          states. Construction of the canal began in 1817. During his
          presidential term, Adams strongly supports national planning of and
          the use of national funds for an improved transportation
          infrastructure.
          <Date>11/1826: Resolution of war damages</Date> Under the mediation of
          Czar Nicholas I, President Adams finalizes a settlement with the
          British over restitution for damages incurred during the War of 1812,
          left unresolved by the Treaty of Ghent.
          <Date>03/1827: Ports closed to British</Date>Adams proclaims all
          American ports closed to trade with British colonies, suspending
          disagreements from an era of protracted contention with the British
          over tariffs, navigation and duties. Adams's declaration embodies his
          response to a rising Continental cartel of exclusive trading
          relationships.
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

export default Events;
