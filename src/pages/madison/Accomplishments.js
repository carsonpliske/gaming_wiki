import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/madison1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>James Madison:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “I believe there are more instances of the abridgment of the freedom
          of the people by gradual and silent encroachments of those in power
          than by violent and sudden usurpations.”{" "}
        </Subhead>
        <Text>
          <Date>01/10/1812: Army bill</Date>
          Congress passes an Army bill to enlarge the second regular army to
          25,000. The increase in manpower is far greater than Madison's request
          -- he had asked for a force of 10,000 -- but the bill provides less
          flexibility than Madison had requested. Amidst disagreements between
          Madison's administration and Congress, modifications are made to the
          legislation over the summer.
          <Date>04/15/1812: Louisiana</Date> Louisiana is admitted to the nation
          as the eighteenth state of the Union.
          <Date>01/07/1815: Bank bill vetoed</Date>The House of Representatives
          passes an amended bank bill as a compromise between Federalists and
          anti-bank Republicans. The bill is nevertheless unsatisfactory to
          Madison and Secretary of the Treasury Dallas. Madison vetoes the bank
          bill on January 30.
          <Date>04/19/1816: Indiana becomes a state</Date>
          Madison signs a bill admitting Indiana to statehood.
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
