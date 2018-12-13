import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/johnson1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Lyndon Johnson:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Yesterday is not ours to recover, but tomorrow is ours to win or
          lose.”{" "}
        </Subhead>
        <Text>
          <Date>02/09/1965: Bombing begins in Vietnam</Date>Nine American
          soldiers are killed in an attack on U.S. barracks in Pleiku, Vietnam.
          Johnson begins the bombing of North Vietnam.
          <Date>04/28/1965: Johnson sends troops to Dominican Republic</Date>
          Johnson sends U.S. marines to the Dominican Republic to protect U.S.
          citizens after a military coup and resulting Dominican Civil War.
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
