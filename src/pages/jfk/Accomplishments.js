import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jfk1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John F. Kennedy:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "Ask not what your country can do for you, but what you can do for
          your country."
        </Subhead>
        <Text>
          <Date>04/15/1961: Bay of Pigs</Date>A U.S.-sponsored invasion of Cuba
          at the Bay of Pigs fails. With inadequate support and facing an
          overwhelming force, the CIA-trained brigade of anti-Castro exiles is
          defeated in a few days. Kennedy takes responsibility for the disaster.
          <Date>05/25/1961: Kennedy plans a man on the moon</Date>
          In an address to Congress, Kennedy pledges that the Unites States will
          land a man on the moon by the end of the decade.
          <Date>02/03/1962: End trade with Cuba</Date>Kennedy halts virtually
          <Date>02/03/1962: 10/28/1962: Cuban Missile Crisis resolved</Date>
          After thirteen days, the Cuban Missile Crisis is resolved. The United
          States will pledge not to invade Cub (and secretly agrees to remove
          missiles from Turkey), in exchange for the removal of the Soviet
          weapons.
          <Date>10/07/1963: Kennedy signs nuclear test-ban</Date>Kennedy signs a
          limited nuclear test-ban treaty with the Soviet Union and the United
          Kingdom.
          <Date>11/22/1963: Kennedy shot in Dallas</Date>Kennedy is assassinated
          while riding in a motorcade in Dallas, Texas. Lee Harvey Oswald is
          arrested and accused of the crime. Vice President Lyndon Baines
          Johnson is sworn in as the thirty-sixth President of the United States
          following the assassination.
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
