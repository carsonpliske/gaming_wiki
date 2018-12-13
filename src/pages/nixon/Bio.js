import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/nixon1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Richard Nixon:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Richard Milhous Nixon was born on January 9, 1913 in Yorba Linda,
          California, in a house that was built by his father. His parents were
          Hannah (Milhous) Nixon and Francis A. Nixon. His mother was a Quaker,
          and his father converted from Methodism to the Quaker faith. Nixon was
          a descendant of the early American settler, Thomas Cornell, who was
          also an ancestor of Ezra Cornell, the founder of Cornell University,
          as well as of Jimmy Carter and Bill Gates. Nixon (second from right)
          makes his newspaper debut in 1916, contributing five cents to a fund
          for war orphans. Donald is to the left of his brother. Nixon's
          upbringing was marked by evangelical Quaker observances of the time,
          such as refraining from alcohol, dancing, and swearing. Nixon had four
          brothers: Harold (1909–33), Donald (1914–87), Arthur (1918–25), and
          Edward (born 1930). Four of the five Nixon boys were named after kings
          who had ruled in historical or legendary Britain; Richard, for
          example, was named after Richard the Lionheart. Nixon's early life was
          marked by hardship, and he later quoted a saying of Eisenhower to
          describe his boyhood: "We were poor, but the glory of it was we didn't
          know it". The Nixon family ranch failed in 1922, and the family moved
          to Whittier, California. In an area with many Quakers, Frank Nixon
          opened a grocery store and gas station. Richard's younger brother
          Arthur died in 1925 at the age of seven after a short illness. At the
          age of twelve, a spot was found on Richard's lung, and, with a family
          history of tuberculosis, he was forbidden to play sports. Eventually,
          the spot was found to be scar tissue from an early bout of pneumonia.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "A man is not finished when he's defeated; he's finished when he
          quits."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> January 9, 1913 Yorba Linda, California, U.S.
          </Item>

          <Item>
            <strong>Died:</strong> April 22, 1994 (aged 81) New York City, New
            York, U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Republican
          </Item>

          <Item>
            <strong>In Office:</strong> January 20, 1969 – August 9, 1974
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
