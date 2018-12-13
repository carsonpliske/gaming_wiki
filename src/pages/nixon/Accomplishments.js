import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/nixon1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Richard Nixon:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "A man is not finished when he's defeated; he's finished when he
          quits."
        </Subhead>
        <Text>
          <Date>07/25/1969: The "Nixon Doctrine"</Date>Nixon affirms his desire
          to withdraw U.S. troops from southeast Asia and declares that
          individual nations will bear a larger responsibility for their own
          security. Initially referred to as the “Guam Doctrine,” this statement
          later becomes known as the “Nixon Doctrine.”
          <Date>11/26/1969: Nixon signs Selective Service Reform</Date>Nixon
          signs the Selective Service Reform bill aimed at calming conscription
          anxieties; this bill ensured that draftees are selected by a lottery
          system, that the prime eligibility of draftees be reduced from seven
          years to one, and that draftees aged 19 would be selected at highest
          priority.
          <Date>12/29/1970: Occupational Health and Safety Act of 1970</Date>
          Nixon signs the Occupational Health and Safety Act of 1970, which
          gives the secretary of labor the responsibility of setting workplace
          safety standards for jobs in the United States.
          <Date>07/12/1971: Emergency Employment Act</Date>Nixon signs an
          Emergency Employment Act, earmarking $2.25 billion for the creation of
          public service jobs at state and local levels.
          <Date>10/21/1972: Pesticide regulation</Date>Nixon enhances the power
          of the Environmental Protection Agency to regulate the sale and use of
          pesticides.<Date>12/21/1973: Nixon increases Social Security</Date>
          Nixon increases Social Security benefits.
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
