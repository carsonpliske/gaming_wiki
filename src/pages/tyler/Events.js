import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/tyler1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Tyler:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "I contend that the strongest of all governments is that which is most
          free. "
        </Subhead>
        <Text>
          <Date>03/1842: Commonwealth v. Hunt</Date>
          The Massachusetts Supreme Court establishes the legality of labor
          unions, including the right for workers to strike, in the case of
          Commonwealth v. Hunt.
          <Date>08/09/1842: Webster-Ashburton Treaty</Date>
          The signing of the Webster-Ashburton Treaty normalizes U.S.-British
          relations by adjusting the Maine-Brunswick border, settling boundary
          issues around western Lake Superior, and resurveying numerous smaller
          borders.
          <Date>04/12/1844: The Texas Annexation Treaty</Date>The Texas
          Annexation Treaty is signed by the United States and the Republic of
          Texas.
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
