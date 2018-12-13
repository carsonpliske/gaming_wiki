import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/ford1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>General R. Ford:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "Never be satisfied with less than your very best effort. If you
          strive for the top and miss, you'll still 'beat the pack.'"
        </Subhead>
        <Text>
          <Date>03/27/1975: Saigon falls, America withdraws</Date>Following the
          fall of the city of Ban Me Thout, Hue, and Danang, the city of Saigon
          falls to the North Vietnamese. The Ford administration evacuates
          remaining Americans and troops from the capital city.
          <Date>05/14/1975: Airstrikes on Cambodia</Date>Marines move onto Koh
          Tang, an island off the shore of Cambodia believed to hold the
          captured sailors of the Mayaguez. Fierce fighting kills fifteen
          Marines, but the sailors are not found. Ford orders airstrikes on the
          Cambodian mainland. At 10:35 PM, the crew of the Mayaguez is released.
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
