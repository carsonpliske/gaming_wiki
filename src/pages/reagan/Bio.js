import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/reagan1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Ronald Reagan:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Ronald Wilson Reagan was born on February 6, 1911, in an apartment on
          the second floor of a commercial building in Tampico, Illinois. He was
          the younger son of Nelle Clyde (née Wilson; 1883–1962) and Jack Reagan
          (1883–1941). Jack was a salesman and storyteller whose grandparents
          were Irish Catholic emigrants from County Tipperary, while Nelle was
          of half English and half Scottish descent (her mother was born in
          Surrey). Reagan's older brother, Neil Reagan (1908–1996), became an
          advertising executive. Reagan's father nicknamed his son "Dutch", due
          to his "fat little Dutchman"-like appearance and "Dutchboy" haircut;
          the nickname stuck with him throughout his youth. Reagan's family
          briefly lived in several towns and cities in Illinois, including
          Monmouth, Galesburg, and Chicago. In 1919, they returned to Tampico
          and lived above the H. C. Pitney Variety Store until finally settling
          in Dixon. After his election as president, Reagan resided in the
          upstairs White House private quarters, and he would quip that he was
          "living above the store again".
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Government exists to protect us from each other. Where government has
          gone beyond its limits is in deciding to protect us from ourselves.”
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> February 6, 1911 Tampico, Illinois, U.S
          </Item>

          <Item>
            <strong>Died:</strong> June 5, 2004 (aged 93) Los Angeles,
            California, U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Republican
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 1981 – January 20, 1989
          </Item>
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

export default Bio;
