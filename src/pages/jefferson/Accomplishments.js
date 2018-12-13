import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jefferson1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Thomas Jefferson:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Do you want to know who you are? Don't ask. Act! Action will
          delineate and define you.”{" "}
        </Subhead>
        <Text>
          <Date>04/30/1802: Enabling Act</Date>
          President Jefferson signs the Enabling Act, establishing procedures
          under which territories organized under the Ordinance of 1787 can
          become a state. The law effectively authorizes people of the Ohio
          territory to hold a convention and frame a constitution.
          <Date>04/30/1803: Louisiana Purchase</Date> Livingston and Monroe are
          sent to conclude a treaty for the acquisition of New Orleans, but
          instead conclude a treaty for the purchase of the entire Louisiana
          Territory. This day marks the official signing of a peace treaty with
          France and the purchase of Louisiana. The addition of 828,000 square
          miles of land between the Mississippi and the Rocky Mountains is
          purchased from France for approximately $15 million, increasing the
          national territory by 140 percent.
          <Date>12/09/1803: The Twelfth Amendment</Date>Motivated by the
          infamous election of 1800, Congress passes the Twelfth Amendment to
          the Constitution, requiring electors to vote for President and vice
          president separately. This ends the tradition of the runner up in a
          presidential race becoming vice president and prevents chances for a
          deadlock tie.
          <Date>01/11/1806: Michigan is formed</Date>
          Michigan is formed from the territory of Indiana.
          <Date>03/02/1807: Importation of slaves prohibited</Date>At
          Jefferson's behest, Congress passes a law prohibiting the importation
          of slaves into any place within the jurisdiction of the United States
          after January 1, 1808.
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
