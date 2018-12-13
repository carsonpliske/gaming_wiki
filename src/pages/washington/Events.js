import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/washington-frown.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George Washington:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>“It is better to offer no excuse than a bad one.”</Subhead>
        <Text>
          <Date>U.S. Capital Moves to Philadelphia</Date>
          On December 6, 1790, the United States Capital officially moved from
          New York City to Philadelphia, Pennsylvania. The capital remained in
          Philadelphia until 1800 when it permanently settled in Washington,
          D.C. The United States government spent its first year (1789-1790)
          under the Constitution in the city of New York. During much of the
          preceding confederation period (1776-1787), however, Congress had
          resided in Philadelphia. Upon the formation of a new national
          government under the Constitution, the city campaigned vigorously for
          the federal government to return. While Congress chose to establish
          the nation's capital along the Potomac River in the District of
          Columbia, it also rewarded Philadelphia; it chose the Pennsylvania
          city to house the federal government until 1800 while its offices in
          Washington were under construction. Arriving in time for the December
          1790 session, Congress moved into Philadelphia's county courthouse,
          Congress Hall. These quarters quickly proved too small, and in 1793
          the building had to be enlarged. The Supreme Court met in the mayor's
          courtroom in Philadelphia's city hall, and President George Washington
          moved into the former home of a local politician. As part of its
          improvement program, Pennsylvania offered to build Washington a
          presidential mansion. Washington, however, feared the city would use
          the residence in a bid to keep the capital in Philadelphia
          permanently. He also worried that living in grandeur would send the
          wrong message to Americans and the world about the nature of the new
          American republic. When Pennsylvania built the mansion anyway,
          Washington refused to live in it. The initial adjustment period proved
          somewhat chaotic as legislators searched for housing in a city rapidly
          filling with tailors, barbers, shoemakers, and other entrepreneurs who
          hoped to capitalize on the presence of the federal government. Prices
          rose accordingly with the increased demand for goods and services, and
          many congressmen bemoaned the higher cost of living. The profusion of
          balls, dinners, dances, public lectures, musical performances, and
          theater spurred by the federal presence created a rich cultural
          environment. President Washington's weekly reception for politicians
          and foreign diplomats and Martha Washington's Friday evening soirées
          commanded the highest priority in the city's social scene.
          Washington's careful cultivation of public esteem and deference in
          Philadelphia enhanced his image as a national symbol and fostered the
          growth of American nationalism. In an era when most Americans looked
          to Congress as the primary branch of government, Washington's public
          persona in Philadelphia helped to elevate the stature of the
          presidency and solidify its importance in the American political
          system.
          <Date>11/04/1791: Fighting in Miami</Date> The Miami Indians soundly
          defeat an American military force of 1400 men led by General Arthur
          St. Clair at the cost of 900 American lives. The Washington
          Administration had sent St. Clair to the Ohio country with the hope
          that his presence would clear the way for American settlers.
          <Date>10/1793: Straining relations with Britain</Date>American
          relations with Britain begin to deteriorate rapidly after the British
          government issues secret orders for the Royal Navy to confiscate any
          vessels trading with French possessions in the Caribbean. The Royal
          Navy seizes more than 200 American ships.
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
