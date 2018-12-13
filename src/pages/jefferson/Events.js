import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jefferson1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Thomas Jefferson:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Do you want to know who you are? Don't ask. Act! Action will
          delineate and define you.”
        </Subhead>
        <Text>
          <Date>05/14/1801: Tripoli declares war</Date>
          Yusuf Karamini, pasha of Tripoli, declares war on the United States by
          symbolically cutting down the flagpole at the U.S. consulate. This
          action came after the United States refused to pay more tribute to the
          Tripolitans in exchange for protection from piracy against American
          ships.
          <Date>
            03/16/1802: Reducing army and establishing West Point
          </Date>{" "}
          Congress reduces the size of the U.S. army to its 1796 limits. It also
          passes an act, which is signed into law by Jefferson, establishing an
          official United States Military Academy at West Point.
          <Date>02/16/1804: Philadelphia burned</Date>Lt. Stephen Decatur burns
          the captured U.S. frigate Philadelphia while docked in Tripoli harbor.
          Tripolitan gunboats had captured the frigate during the previous
          October. No one is killed.
          <Date>06/04/1805: Treaty of Peace and Amity in Tripoli</Date>
          The United States and Tripoli sign a Treaty of Peace and Amity in
          Tripoli, effectively ending the Tripolitan War.
          <Date>04/18/1806: Prohibiting British imports</Date>In protest against
          the seizure of American ships and the impressment of American sailors
          by Britain, Congress passes a law prohibiting the importation of many
          British products into the United States.
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
