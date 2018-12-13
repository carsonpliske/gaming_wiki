import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/vanburen1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Martin van Buren:</Headline>
        <Topic>Bio</Topic>
        <Text>
          an Buren was born on December 5, 1782, in the village of Kinderhook,
          New York, about 20 miles (32 km) south of Albany on the Hudson River.
          He was the first U.S. President not born a British subject nor of
          British ancestry. His birth name was Maarten Van Buren (About this
          soundpronunciation (help·info)). His father, Abraham Van Buren, was a
          descendant of Cornelis Maessen of the village of Buurmalsen,
          Netherlands, who had come to North America in 1631 and purchased a
          plot of land on Manhattan Island. Abraham Van Buren had been a Patriot
          during the American Revolution, and he later joined the
          Democratic-Republican Party. He owned an inn and tavern in Kinderhook
          and served as Kinderhook's town clerk for several years. In 1776, he
          married Maria Hoes "Goes" Van Alen, also of Dutch extraction and the
          widow of Johannes Van Alen. She had three children from her first
          marriage, including future U.S. Representative James I. Van Alen. Her
          second marriage produced five children, including Martin. Van Buren
          spoke English as a second language, unlike any other president; his
          primary language in his youth was Dutch. Van Buren received a basic
          education at the village schoolhouse and briefly studied Latin at the
          Kinderhook Academy and at Washington Seminary in Claverack. His formal
          education ended in 1796 when he began reading law at the office of
          Peter Silvester and his son Francis, prominent Federalist Party
          attorneys in Kinderhook. At his father's inn, Van Buren learned early
          to interact with people from varied ethnic, income, and societal
          groups, which he used to his advantage as a political organizer. Van
          Buren was small in stature at 5 feet 6 inches tall, and some referred
          to him as "Little Van." When he first began his legal studies, he
          often presented an unkempt appearance in rough, homespun clothing, and
          the Silvesters admonished him about how crucial a lawyer's clothing
          and personal appearance were to the success of his practice. He
          accepted their advice and patterned his clothing, appearance, bearing,
          and conduct after theirs.Van Buren adopted the Democratic-Republican
          political leanings of his father, despite his association with the
          Silvesters and Kinderhook's strong affiliation with the Federalist
          Party. The Silvesters and Democratic-Republican political figure John
          Peter Van Ness suggested that Van Buren's political leanings
          constrained him to complete his education with a Democratic-Republican
          attorney, so he spent a final year of apprenticeship in the New York
          City office of John Van Ness's brother William P. Van Ness, a
          political lieutenant of Aaron Burr. Van Ness introduced Van Buren to
          the intricacies of New York state politics, and Van Buren observed
          Burr's battles for control of the state Democratic-Republican party
          against George Clinton and Robert R. Livingston. He returned to
          Kinderhook in 1803, after being admitted to the New York bar. Van
          Buren married Hannah Hoes in Catskill, New York on February 21, 1807,
          his childhood sweetheart and a daughter of his first cousin. Like Van
          Buren, she was raised in a Dutch home; she spoke primarily Dutch, and
          spoke English with a distinct accent. The couple had five children,
          four of whom lived to adulthood: Abraham (1807–1873), John
          (1810–1866), Martin Jr. (1812–1855), Winfield Scott (born and died in
          1814), and Smith Thompson (1817–1876). Hannah contracted tuberculosis
          and died on February 5, 1819 at age 35, and Van Buren never remarried.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The less government interferes with private pursuits, the better for
          general prosperity."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> December 5, 1782 Kinderhook, New York, U.S.
          </Item>

          <Item>
            <strong>Died:</strong> July 24, 1862 (aged 79) Kinderhook, New York,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1837 – March 4, 1841
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
